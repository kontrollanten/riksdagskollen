import Component from '@ember/component';

export default Component.extend({

  classNames: ['star-member'],

  click() {
    this.toggleProperty('member.stared');
  },
});
