import { assert } from "@ember/debug";
import { A } from "@ember/array";
import { scheduleOnce, next } from "@ember/runloop";
import { observer } from "@ember/object";
import { on } from "@ember/object/evented";
import Component from "@ember/component";
import layout from "../../templates/components/toolbox-table/table-row";
import RegisterableComponent from "../../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "div",
  classNames: ["toolbox-table__row"],

  // Collapsed or expanded
  isExpanded: true,

  // Expands / Collapses the row's table
  toggleIsExpanded() {
    this.toggleProperty("isExpanded");
  },

  // Expands / Collapses one of the row's lists
  triggerClicked(trigger) {
    this.get("lists").forEach(list => {
      if (list.get("identifier") === trigger.get("list")) {
        list.toggleProperty("isExpanded");
      } else {
        list.set("isExpanded", false);
      }
    });
  },

  init() {
    this.set("content", null);
    this.set("lists", A());
    this.set("table", null);
    this.set("expander", null);
    this._super(...arguments);
  },

  actions: {
    // Triggered when the expander is clicked
    handleToggleIsExpanded() {
      if (this.toggleIsExpanded) {
        this.toggleIsExpanded();
      }
    },
    // Triggered when a list trigger is clicked
    handleTriggerClicked(trigger) {
      if (this.triggerClicked) {
        this.triggerClicked(trigger);
      }
    },

    // ----------------------------
    // Registration of children
    registerContent(content) {
      assert(
        "You assigned more than one content to the same toolbox-table/table-row.",
        this.get("content") === null
      );
      this.set("content", content);
    },
    unregisterContent(content) {
      this.set("content", null);
    },
    registerList(list) {
      if (!this.get("lists").includes(list)) {
        this.get("lists").pushObject(list);
      }
    },
    unregisterList(list) {
      this.get("lists").removeObject(list);
    },
    registerTable(table) {
      assert(
        "You assigned more than one table to the same toolbox-table/table-row.",
        this.get("table") === null
      );
      next(() => {
        this.set("table", table);
      });
    },
    unregisterTable(table) {
      this.set("table", null);
    },
    registerExpander(expander) {
      assert(
        "You assigned more than one expander to the same toolbox-table/table-row.",
        this.get("expander") === null
      );
      this.set("expander", expander);
    },
    unregisterExpander(expander) {
      this.set("expander", null);
    }
    // ----------------------------
  }
});
