import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | vote-graph', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    this.set('model', []);
    await render(hbs`{{vote-graph model=model}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
