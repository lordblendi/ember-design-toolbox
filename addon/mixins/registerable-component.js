import Mixin from "@ember/object/mixin";

export default Mixin.create({
  init() {
    if (this.register) {
      this.register(this);
    }
    this._super(...arguments);
  },

  willDestroy() {
    if (this.unregister) {
      this.unregister(this);
    }
    this._super(...arguments);
  }
});
