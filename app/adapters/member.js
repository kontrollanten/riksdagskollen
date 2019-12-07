import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://data.riksdagen.se',

  namespace: 'personlista',

  findAll() {
    const lsKey = 'data-members';

    const fetchEm = () => fetch(this.urlForFindAll())
      .then(resp => resp.json())
      .then(members => {
        localStorage.setItem(lsKey, JSON.stringify(members));

        return members;
      });

    const cachedVal = localStorage.getItem(lsKey);
    if (cachedVal) {
      fetchEm();

      return Promise.resolve(JSON.parse(cachedVal));
    }

    return fetchEm();
  },

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
