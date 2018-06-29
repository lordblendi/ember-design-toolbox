import Controller from '@ember/controller';

export default Controller.extend({
  examples: Ember.computed.alias("model"),
  loading: false,
  actions: {
    updateSelection(example, selection) {
      example.set("selected", selection);
    }
  }
});
