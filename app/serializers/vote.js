import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    const model = payload.voteringlista.votering;

    if (Array.isArray(model)) {
      payload = model.map(obj => {
        return this._normalize(obj)
      })
    } else {
      payload = this._normalize(model)
    }
    
    payload = {
      votes: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  _normalize(model) {
    return {
      id: model.hangar_id + '-' + model.votering_id, 
      vote: model.rost,
      date: model.systemdatum,
      point: model.punkt,
      votation: model.votering,
      concern: model.avser,
      link: model.votering_url_xml,
      voteArea: model.valkrets
    }
  }

});
