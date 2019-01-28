import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | member-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it should set accurate background from ', async function(assert) {
    await render(hbs`{{member-list-item}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
