import DS from 'ember-data';
import {xml2json} from 'xml-js';

export default DS.RESTAdapter.extend({

  host: 'https://data.riksdagen.se',

  namespace: 'voteringlista',

  ajaxOptions: function(url, type, options) {
    const hash = DS.RESTAdapter.prototype.ajaxOptions.call(this, url, 'GET', options);
    hash.dataType = 'xml';
    return hash;
  },

  handleResponse(status, headers, body) {
    const xml = new XMLSerializer().serializeToString(body);

    return JSON.parse(xml2json(xml, { compact: true,  textFn: (value, parentElem) => {
      const keyNo = Object.keys(parentElem._parent).length;
      const keyName = Object.keys(parentElem._parent)[keyNo - 1];
      parentElem._parent[keyName] = value;
    }}));
  },

  urlForQuery(query) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/?sz=1000&utformat=xml&iid=${query.memberId}`
  }
});
