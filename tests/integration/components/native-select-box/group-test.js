import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('native-select-box/group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`<NativeSelectBox::Group />`);

    assert
      .dom('optgroup.select-box__group')
      .exists({ count: 1 }, 'renders with correct class name and tag');
  });

  test('data component attribute', async function(assert) {
    assert.expect(1);

    await render(hbs`<NativeSelectBox::Group />`);

    assert
      .dom('[data-component="group"]')
      .exists(
        { count: 1 },
        'does not have a data attribute signifying its type'
      );
  });
});
