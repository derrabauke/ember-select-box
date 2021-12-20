import Controller from '@ember/controller';
import { biscuits } from '../utils/dummy-data';
import { tracked } from '@glimmer/tracking';

export default class NativeSimpleSelectController extends Controller {
  @tracked selectedBiscuit = biscuits[2];

  selectableBiscuits = biscuits;

  selectBiscuit = (biscuit) => {
    this.selectedBiscuit = biscuit;
  };
}
