import Component from '@ember/component';

export default Component.extend({

  classNames: ['star-member'],

  touchStart() {
    console.log('click')
    this.toggleProperty('member.stared');
  },
});
