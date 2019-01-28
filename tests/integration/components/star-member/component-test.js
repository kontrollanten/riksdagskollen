import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, tap } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-member', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders accurate star when member is not stared', async function(assert) {
    this.set('member', { stared: false });

    await render(hbs`{{star-member member=member}}`);

    assert.equal(this.element.textContent.trim(), 'star_border');
  });

  test('it renders accurate star when member is stared', async function(assert) {
    this.set('member', { stared: true });

    await render(hbs`{{star-member member=member}}`);

    assert.equal(this.element.textContent.trim(), 'star');
  });

  test('it toggles member.started upon click', async function(assert) {
    this.set('member', { stared: true });

    await render(hbs`{{star-member member=member}}`);

    await tap(this.element.querySelector('.star-member').firstElementChild);

    assert.equal(this.get('member.stared'), false);
  });
});
