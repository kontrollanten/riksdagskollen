import Route from '@ember/routing/route';

const getTitle = ({
  firstName,
  lastName,
  party,
}, subTitle) => [`${firstName} ${lastName}, ${party}`, subTitle, 'Riksdagskollen'].filter(p => p).join(' | ');

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('member', params.member_id);
  },
  afterModel: function(member) {
    this.transitionTo('info');

    document.title = getTitle(member);
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('application');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
          controller.set('currentlyLoading', false);
      });
    }
  }
});
