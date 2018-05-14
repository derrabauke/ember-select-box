import Mixin from '@ember/object/mixin';
import { isPresent } from '@ember/utils';
import { run } from '@ember/runloop';
import trySet from '../../utils/try-set';
import invokeAction from '../../utils/invoke-action';

export default Mixin.create({
  isOpen: false,

  didReceiveAttrs() {
    this._super(...arguments);

    if (isPresent(this.get('is-open'))) {
      this.set('isOpen', this.get('is-open'));
    }
  },

  actions: {
    open() {
      this._super(...arguments);

      this.set('isOpen', true);

      invokeAction(this, 'on-open', this.get('api'));
    },

    close() {
      this._super(...arguments);

      run(() => trySet(this, 'isClosing', true));
      run(() => trySet(this, 'isOpen', false));
      run(() => trySet(this, 'isClosing', false));

      invokeAction(this, 'on-close', this.get('api'));
    },

    toggle() {
      this._super(...arguments);

      if (this.get('isOpen')) {
        this.send('close');
      } else {
        this.send('open');
      }
    }
  }
});
