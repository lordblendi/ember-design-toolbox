import EmberObject from '@ember/object';
import { assert } from 'chai';
import {
  describe,
  it
} from 'mocha';
import ButtonBaseMixin from 'ember-design-toolbox/mixins/button-base';


describe('Unit | Mixin | button-base', function() {
  // Replace this with your real tests.
  it('works', function() {
    var ButtonBaseObject = EmberObject.extend(ButtonBaseMixin);
    var subject = ButtonBaseObject.create();
    assert.ok(subject);
  });
});