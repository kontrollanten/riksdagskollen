import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  uniqueSpeeches: computed('model', function() {
    return this.get('model').uniqBy('did').sortBy('date').reverse();
  })
});
