import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    return this.get('store').query('vote', {memberId: transition.params.member.member_id}).then(data => {
      return data.sortBy('date').reverse();
    });
  }
});
