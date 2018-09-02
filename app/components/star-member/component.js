import Component from '@ember/component';

export default Component.extend({

  classNames: ['star-member'],

  actions: {
    toggle() {
      this.toggleProperty('member.stared');
    }
  }
});
