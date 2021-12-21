import Controller from '@ember/controller';
import { puddings } from '../utils/dummy-data';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SimpleSelectController extends Controller {
  @tracked selectedPudding;

  selectablePuddings = puddings;

  @action
  selectPudding(pudding) {
    this.selectedPudding = pudding;
  }
}
