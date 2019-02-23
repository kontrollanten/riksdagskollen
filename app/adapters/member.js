import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://data.riksdagen.se',

  namespace: 'personlista',

  shouldBackgroundReloadAll() {
    return false;
  },

  urlForFindAll() {
    return `${this.buildURL()}/?utformat=json`;
  },

  urlForFindRecord(ids, modelName, snapshot) {
    return `${this.buildURL()}/?utformat=json&iid=${snapshot.id}`;
  }

});
