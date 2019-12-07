import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    return this.get('store').query('speech', {memberId: transition.to.parent.params.member_id});
  }
});
