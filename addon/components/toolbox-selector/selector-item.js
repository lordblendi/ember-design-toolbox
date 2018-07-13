import Component from "@ember/component";
import layout from "../../templates/components/toolbox-selector/selector-item";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["selector__item"],
  classNameBindings: ["isSelected:selector__item--selected"],

  click() {
    if (this.get("isSelected") && this.willUnselect) {
      this.willUnselect(this);
    } else if (!this.get("isSelected") && this.willSelect) {
      this.willSelect(this);
    }
  },

  handleSelect() {
    if (this.select) {
      this.select();
    }
  },

  handleUnselect() {
    if (this.unselect) {
      this.unselect();
    }
  },

  init() {
    this._super(...arguments);
    if (this.register) {
      this.register(this);
    }
  },

  willDestroy() {
    this._super(...arguments);
    if (this.unregister) {
      this.unregister(this);
    }
  }
});
