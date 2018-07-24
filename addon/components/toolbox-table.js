import { assert } from "@ember/debug";
import { A } from "@ember/array";
import $ from "jquery";
import { scheduleOnce } from "@ember/runloop";
import { on } from "@ember/object/evented";
import { computed, observer } from "@ember/object";
import Component from "@ember/component";
import layout from "../templates/components/toolbox-table";
import RegisterableComponent from "../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "div",
  classNames: ["toolbox-table"],
  classNameBindings: ["isSubList:toolbox-table--sublist"],

  animationDuration: 500,
  isSubList: false,
  isExpanded: true,

  rowsTables: computed("rows.@each.table", function() {
    return this.get("rows").map(row => {
      return row.get("table");
    });
  }),

  anyRowExpanded: false,

  checkAnyRowExpanded: on(
    "init",
    observer("rows.@each.isExpanded", function() {
      scheduleOnce("afterRender", () => {
        this.set(
          "anyRowExpanded",
          this.get("rows").some(row => {
            if (row) {
              return row.get("isExpanded");
            }
          })
        );
      });
    })
  ),

  didInsertElement() {
    this.handleIsExpandedChanged(0);
  },

  handleIsExpandedChanged(duration) {
    this.$().velocity("finish");
    if (this.get("isExpanded")) {
      $.Velocity.animate(this.$(), "slideDown", {
        duration
      });
    } else {
      $.Velocity.animate(this.$(), "slideUp", {
        duration
      });
    }
  },

  isExpandedDidChange: observer("isExpanded", function() {
    scheduleOnce(
      "afterRender",
      this,
      this.handleIsExpandedChanged,
      this.get("animationDuration")
    );
  }),
  init() {
    this.set("header", null);
    this.set("headerRow", null);
    this.set("rows", A());
    this._super(...arguments);
  },

  collapseAllRows() {
    this.get("rows").forEach(row => {
      row.set("isExpanded", false);
    });
  },

  expandAllRows() {
    this.get("rows").forEach(row => {
      row.set("isExpanded", true);
    });
  },

  actions: {
    toggleRowsIsExpanded() {
      if (this.get("anyRowExpanded")) {
        // Collapse everything
        if (this.collapseAllRows) {
          this.collapseAllRows();
        }
      } else {
        // Expand everything
        if (this.expandAllRows) {
          this.expandAllRows();
        }
      }
    },
    registerHeader(header) {
      assert(
        "You assigned more than one header to the same toolbox-table.",
        this.get("header") === null
      );
      this.set("header", header);
    },
    unregisterHeader(header) {
      this.set("header", null);
    },
    registerHeaderRow(headerRow) {
      // There should only be one header row in the table.
      assert(
        "You assigned more than one header row to the same toolbox-table.",
        this.get("headerRow") === null
      );
      this.set("headerRow", headerRow);
    },
    unregisterHeaderRow(headerRow) {
      this.set("headerRow", null);
    },
    registerRow(row) {
      if (!this.get("rows").includes(row)) {
        this.get("rows").pushObject(row);
      }
    },
    unregisterRow(row) {
      if (row.isHeader) {
        this.set("headerRow", null);
      } else {
        this.get("rows").removeObject(row);
      }
    }
  }
});
