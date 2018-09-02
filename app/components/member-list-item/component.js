import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  backgroundImage: computed('url', function() {

    return htmlSafe(`background: url(${this.get('url')}) no-repeat center center; background-size: cover;`);

  }),

  prepareForFOrceClick(e) {
    console.log('prepare')
  },

  enterForceClick(e) {
    console.log('enter')
    this.toggleProperty('model.stared');
  },

  endForceClick(e) {
    console.log('end')
  },

  forceChanged(e) {
    console.log('change')
  },

  didInsertElement() {
    this._super(...arguments);

    let self = this

    this.element.addEventListener("webkitmouseforcewillbegin", () => {
      console.log('prepare')
      //self.toggleProperty('model.stared');
    }, true);
    this.element.addEventListener("webkitmouseforcedown", this.enterForceClick.bind(this), true);
    this.element.addEventListener("webkitmouseforceup", this.endForceClick.bind(this), true);
    this.element.addEventListener("webkitmouseforcechanged", this.forceChanged.bind(this), true)
  }

});
