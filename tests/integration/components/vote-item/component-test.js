import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | vote-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders accurate date', async function(assert) {
    const date = 'julafton';
    this.set('model', { date });
    await render(hbs`{{vote-item model=model}}`);

    assert.ok(this.element.textContent.trim().match(new RegExp(date)));
  });
});
