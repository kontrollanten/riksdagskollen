import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://data.riksdagen.se',

  namespace: 'personlista',

  urlForFindAll() {
    let baseUrl = this.buildURL();
    return `${baseUrl}/?utformat=json`;
  },

  urlForFindRecord(ids, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/?utformat=json&iid=${snapshot.id}`;
  }

});
