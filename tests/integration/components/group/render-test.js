import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('select-box/group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group />
        </sb.Options>
      </SelectBox>
    `);

    assert.dom('.select-box__group').hasTagName('div');
  });

  test('splattributes', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group class="foo" />
        </sb.Options>
      </SelectBox>
    `);

    assert.dom('.select-box__group').hasClass('foo');
  });

  test('whitespace', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group />
        </sb.Options>
      </SelectBox>
    `);

    assert.strictEqual(find('.select-box__group-label').innerHTML, '');
    assert.strictEqual(find('.select-box__group-options').innerHTML, '');
  });

  test('label', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group @label="Foo" />
        </sb.Options>
      </SelectBox>
    `);

    assert.dom('.select-box__group-label').hasText('Foo');
  });

  test('role', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group />
        </sb.Options>
      </SelectBox>
    `);

    assert.dom('.select-box__group').hasAttribute('role', 'group');
  });

  test('aria', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group />
        </sb.Options>
      </SelectBox>
    `);

    assert.ok(
      find('.select-box__group-label')
        .getAttribute('id')
        .match(/[\w\d]+/)
    );

    assert
      .dom('.select-box__group')
      .hasAttribute(
        'aria-labelledby',
        find('.select-box__group-label').getAttribute('id')
      );
  });

  test('block', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox as |sb|>
        <sb.Options>
          <sb.Group>
            Hello World
          </sb.Group>
        </sb.Options>
      </SelectBox>
    `);

    assert.dom('.select-box__group-options').hasText('Hello World');
  });
});
