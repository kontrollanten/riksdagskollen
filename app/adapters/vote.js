import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://data.riksdagen.se',

  namespace: 'voteringlista',

  urlForQuery(query) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/?sz=500&utformat=json&iid=${query.memberId}`
  }

});