import Mixin from '@ember/object/mixin';

export default Mixin.create({
  classNames: ["btn"],
  classNameBindings: ["go:btn--go", "drop:btn--drop", "naked:btn--naked", "capitalized:btn--small-caps", "loading:animate-loading"],

  type: Ember.computed(function(){ return "" }),
  go: Ember.computed.equal("type", "go"),
  drop: Ember.computed.equal("type", "drop"),
  naked: Ember.computed.equal("type", "naked")
});
