import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('select-box/selected-option', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs `{{select-box/selected-option}}`);

    assert.equal(findAll('div.select-box-selected-option').length, 1,
      'renders with correct class name and tag');
  });

  test('class prefix', async function(assert) {
    assert.expect(1);

    await render(hbs `{{select-box/selected-option class-prefix="foo"}}`);

    assert.equal(findAll('.foo-selected-option').length, 1,
      'can override the class prefix');
  });

  test('title', async function(assert) {
    assert.expect(1);

    await render(hbs `{{select-box/selected-option title="Foo"}}`);

    assert.equal(find('.select-box-selected-option').getAttribute('title'), 'Foo',
      'a selected option can have a title attribute');
  });

  test('style', async function(assert) {
    assert.expect(1);

    await render(hbs `{{select-box/selected-option style="color:red<script>"}}`);

    assert.ok(this.get('element').innerHTML.match('style="color:red&amp;lt;script&amp;gt;"'),
      'a selected option can be styled, value is escaped');
  });

  test('yield', async function(assert) {
    assert.expect(1);

    this.set('selectedItems', [
      { myValue: 'foo', myLabel: 'Foo' },
      { myValue: 'bar', myLabel: 'Bar' }
    ]);

    await render(hbs`
      {{#select-box as |sb|}}
        {{#each selectedItems as |item|}}
          {{#sb.selected-option value=item as |so|~}}
            {{so.value.myLabel}} ({{so.index}})
          {{~/sb.selected-option}}
        {{/each}}
      {{/select-box}}
    `);

    assert.ok(
      findAll('.select-box-selected-option')[0].textContent === 'Foo (0)' &&
      findAll('.select-box-selected-option')[1].textContent === 'Bar (1)',
      'selected options can yield their label, value & index'
    );
  });
});
