import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('member', {reload: true}).then(data => {
      return data.sortBy('sortName')
    });
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('application');
      controller.set('currentlyLoading', true);
      console.log('laddar...')
      transition.promise.finally(function() {
        console.log('klart')
          controller.set('currentlyLoading', false);
      });
    }
  }
});
