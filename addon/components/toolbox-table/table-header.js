import { assert } from "@ember/debug";
import Component from "@ember/component";
import layout from "../../templates/components/toolbox-table/table-header";
import RegisterableComponent from "../../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "header",
  classNames: ["header", "header--table"],

  init() {
    this.set("title", null);
    this.set("actionsBlock", null);
    this._super(...arguments);
  },

  actions: {
    // ----------------------------
    // Registration of children
    registerTitle(title) {
      assert(
        "You assigned more than one title to the same toolbox-table/table-header.",
        this.get("title") === null
      );
      this.set("title", title);
    },
    unregisterTitle(title) {
      this.set("title", null);
    },
    registerActions(actions) {
      assert(
        "You assigned more than one actions block to the same toolbox-table/table-header.",
        this.get("actionsBlock") === null
      );
      this.set("actionsBlock", actions);
    },
    unregisterActions(actions) {
      this.set("actionsBlock", null);
    }
    // ----------------------------
  }
});
