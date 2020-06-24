import sinon from 'sinon';
import Application from '@ember/application';
import { initialize } from 'dummy/initializers/resize-observer-polyfill';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | resize-observer-polyfill', function (hooks) {
  hooks.beforeEach(function () {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize,
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function () {
    run(this.application, 'destroy');
  });

  test('it works', async function (assert) {
    sinon.stub(window, 'ResizeObserver').value(undefined);

    assert.notOk(window.ResizeObserver, 'before: ResizeObserver is not available');

    await this.application.boot();

    assert.ok(window.ResizeObserver, 'after: ResizeObserver is available');
  });

  test('does not override existing ResizeObserver', async function (assert) {
    sinon.stub(window, 'ResizeObserver');

    assert.ok(window.ResizeObserver.isSinonProxy, 'before: ResizeObserver is available');

    await this.application.boot();

    assert.ok(window.ResizeObserver.isSinonProxy, 'after: ResizeObserver is not changed');
  });

  test('does nothing in FastBoot env', async function (assert) {
    window.FastBoot = undefined;
    sinon.stub(window, 'FastBoot').value(true);
    sinon.stub(window, 'ResizeObserver').value(undefined);

    assert.notOk(window.ResizeObserver, 'before: ResizeObserver is not available');

    await this.application.boot();

    assert.notOk(window.ResizeObserver, 'after: ResizeObserver is still not available');
  });
});
