import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    const members = payload.personlista.person;

    if (Array.isArray(members)) {
      payload = members.map(person => {
        return this._normalize(person)
      })
    } else {
      payload = this._normalize(members)
    }
    
    
    payload = {
      members: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  _normalize(person) {
    return {
      id: person.intressent_id, 
      firstName: person.tilltalsnamn,
      lastName: person.efternamn,
      party: person.parti,
      thumbnail: person.bild_url_192,
      bigImage: person.bild_url_max,
      status: person.status,
      sortName: person.sorteringsnamn,
      gender: person.kon,
      born: person.fodd_ar,
      information: person.personuppgift.uppgift
    }
  }

});
