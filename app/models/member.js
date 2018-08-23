import DS from 'ember-data';

export default DS.Model.extend({

  firstName: DS.attr(),
  lastName: DS.attr(),
  sortName: DS.attr(),
  status: DS.attr(),
  party: DS.attr(),
  thumbnail: DS.attr(),
  bigImage: DS.attr(),
  information: DS.attr(),
  gender: DS.attr(),
  born: DS.attr()


});
