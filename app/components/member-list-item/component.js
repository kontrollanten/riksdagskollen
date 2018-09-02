import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  backgroundImage: computed('url', function() {

    return htmlSafe(`background: url(${this.get('url')}) no-repeat center center; background-size: cover;`);

  }),

  prepareForFOrceClick(e) {

  },

  enterForceClick(e) {
    this.toggleProperty('model.stared');
  },

  endForceClick(e) {

  },

  forceChanged(e) {

  },

  didInsertElement() {
    this._super(...arguments);

    this.element.addEventListener("webkitmouseforcewillbegin", this.prepareForForceClick, false);
    this.element.addEventListener("webkitmouseforcedown", this.enterForceClick, false);
    this.element.addEventListener("webkitmouseforceup", this.endForceClick, false);
    this.element.addEventListener("webkitmouseforcechanged", this.forceChanged, false)
  }

});
