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

  // Whether the table is actually a subList
  isSubList: false,

  // Collapsed or expanded
  isExpanded: true,

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

  init() {
    this.set("header", null);
    this.set("headerRow", null);
    this.set("rows", A());
    this.set("footerRow", null);
    this._super(...arguments);
  },

  // ----------------------------
  // Animations

  // We need to force the initial state once attributes have been set
  didInsertElement() {
    this.handleIsExpandedChanged(0);
  },

  // Duration of animations, can be overridden by consumer
  animationDuration: 500,

  // Whenever "isExpanded" changes, we need to slideUp/Down the component.
  isExpandedDidChange: observer("isExpanded", function() {
    scheduleOnce(
      "afterRender",
      this,
      this.handleIsExpandedChanged,
      this.get("animationDuration")
    );
  }),

  // Animate the component given a duration
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
  // ----------------------------

  // ----------------------------
  // AnyRowsExpanded calculation

  // Whether any child row of this table is expanded.
  // This is used by the header row to show the proper icon to collapse / expand all.
  anyRowExpanded: false,
  calculateAnyRowsExpanded() {
    this.set(
      "anyRowExpanded",
      this.get("rows").some(row => {
        if (row) {
          return row.get("table") && row.get("isExpanded");
        }
      })
    );
  },
  checkAnyRowExpanded: on(
    "init",
    observer("rows.@each.isExpanded", "rows.@each.table", function() {
      scheduleOnce("afterRender", this, this.calculateAnyRowsExpanded);
    })
  ),
  // ----------------------------

  actions: {
    // Triggered when a header row expander is clicked
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

    // ----------------------------
    // Registration of children
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
    },
    registerFooterRow(footerRow) {
      // There should only be one footer row in the table.
      assert(
        "You assigned more than one footer row to the same toolbox-table.",
        this.get("footerRow") === null
      );
      this.set("footerRow", footerRow);
    },
    unregisterFooterRow(footerRow) {
      this.set("footerRow", null);
    }
    // ----------------------------
  }
});
