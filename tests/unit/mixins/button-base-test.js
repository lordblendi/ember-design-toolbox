import EmberObject from '@ember/object';
import ButtonBaseMixin from 'ember-design-toolbox/mixins/button-base';
import { module, test } from 'qunit';

module('Unit | Mixin | button-base', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ButtonBaseObject = EmberObject.extend(ButtonBaseMixin);
    let subject = ButtonBaseObject.create();
    assert.ok(subject);
  });
});
