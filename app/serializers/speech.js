import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    const model = payload.anforandelista.anforande;

    if (Array.isArray(model)) {
      payload = model.map(obj => {
        return this._normalize(obj)
      })
    } else {
      payload = this._normalize(model)
    }
    
    
    payload = {
      speeches: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  _normalize(model) {
    return {
      id: model.dok_id, 
      did: model.anforande_id,
      title: model.avsnittsrubrik,
      activity: model.kammaraktivitet,
      speechUrl: model.anforande_url_xml,
      date: model.systemdatum
    }
  }

});
