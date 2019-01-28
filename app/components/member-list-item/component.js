import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  backgroundImage: computed('url', function() {

    return htmlSafe(`background: url(${this.get('url')}) no-repeat center center; background-size: cover;`);
  }),

  prepareForForceClick(e) {
    e.preventDefault();
    e.stopPropagation();
  },

  enterForceClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleProperty('model.stared');
  },
  
  endForceClick() {
  },
  
  forceChanged() {
  },

  didInsertElement() {
    this._super(...arguments);

    this.element.addEventListener("webkitmouseforcewillbegin", this.prepareForForceClick.bind(this), true);
    this.element.addEventListener("webkitmouseforcedown", this.enterForceClick.bind(this), false);
    this.element.addEventListener("webkitmouseforceup", this.endForceClick.bind(this), false);
    this.element.addEventListener("webkitmouseforcechanged", this.forceChanged.bind(this), false)
  }

});
