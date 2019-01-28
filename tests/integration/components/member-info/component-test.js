import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | member-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it render accurate born date', async function(assert) {
    const born = 1988;
    this.set('model', {
      born,
      information: []
    });

    await render(hbs`{{member-info model=model}}`);

    assert.ok(this.element.textContent.trim().match(new RegExp(`Född: ${born}`)));
  });
});
