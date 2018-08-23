import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  backgroundImage: computed('url', function() {

    return htmlSafe(`background: url(${this.get('url')}) no-repeat center center; background-size: cover;`);

  }),

});
