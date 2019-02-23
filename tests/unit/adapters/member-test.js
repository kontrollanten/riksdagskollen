import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | member', function(hooks) {
  setupTest(hooks);

  test('findAll fetches data from accurate endpoint', function(assert) {
    const adapter = this.owner.lookup('adapter:member');
    assert.ok(adapter.urlForFindAll().match(/https:\/\/data\.riksdagen(.*)utformat=json/i));
  });

  test('findRecord fetches data from accurate endpoint', function(assert) {
    const adapter = this.owner.lookup('adapter:member');
    const id = 1337;

    assert.ok(adapter.urlForFindRecord(null, '', { id }).match(new RegExp(`iid=${id}`)));
  });

  test('findAll should not reload in background', function(assert) {
    const adapter = this.owner.lookup('adapter:member');

    assert.ok(adapter.shouldBackgroundReloadAll() === false);
  });
});
