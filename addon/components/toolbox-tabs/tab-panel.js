import Component from "@ember/component";
import layout from "../../templates/components/toolbox-tabs/tab-panel";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["tabs-panels__panel"],
  classNameBindings: ["_isSelected:tabs-panels__panel--active"],

  title: null,

  // Set by the user, will only be checked on registration
  selected: false,
  // Set and modified by the toolbox-tab component
  _isSelected: false,

  show() {
    this.set("_isSelected", true);
  },
  hide() {
    this.set("_isSelected", false);
  },

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
