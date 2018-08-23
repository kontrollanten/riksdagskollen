import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://data.riksdagen.se',

  namespace: 'anforandelista',

  urlForQuery(query) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/?sz=200&utformat=json&iid=${query.memberId}`
  }

});
