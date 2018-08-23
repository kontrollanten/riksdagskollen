import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { get, computed } from '@ember/object';

export default Component.extend({
  classNames: ['member-profile'],
  style: computed('model', {
    get() {
      return htmlSafe(`background: linear-gradient(
        rgba(38, 22, 127, 0.75), 
        rgba(90, 22, 127, 0.45)
      ), url(${get(this, 'model.bigImage')})  no-repeat center center fixed;`);
    }
  }),
});
