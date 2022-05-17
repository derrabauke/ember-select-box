import Component from '@glimmer/component';
import {
  _destroyComponent,
  _insertComponent
} from '../../../utils/component/lifecycle';
import buildId from '../../../utils/shared/id';
import { action } from '@ember/object';

export default class SelectBoxOptions extends Component {
  get id() {
    return buildId(this);
  }

  get isMultiSelectable() {
    return (
      this.args.selectBox &&
      this.args.selectBox.isMultiple &&
      this.args.selectBox.isCombobox
    );
  }

  @action
  handleInsertElement() {
    _insertComponent(this);
  }

  @action
  handleDestroyElement() {
    _destroyComponent(this);
  }
}
