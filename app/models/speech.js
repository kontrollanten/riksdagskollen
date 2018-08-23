import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  activity: DS.attr(),
  speechUrl: DS.attr(),
  did: DS.attr(),
  date: DS.attr()

});
