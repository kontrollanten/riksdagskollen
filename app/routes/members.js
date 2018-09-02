import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let models = this.store.peekAll('member');
    let reload = true;
    if (models.length > 1) {
      reload = false;
    }
    return this.store.findAll('member', {reload: reload}).then(data => {
      return data.sortBy('sortName')

    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('stars', model.filterBy('firstName', 'Said'));
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
