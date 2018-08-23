import DS from 'ember-data';

export default DS.Model.extend({
  vote: DS.attr(),
  date: DS.attr(),
  votation: DS.attr(),
  link: DS.attr(),
  paragraph: DS.attr(),
  point: DS.attr(),
  voteArea: DS.attr(),
  concern: DS.attr(),
});
