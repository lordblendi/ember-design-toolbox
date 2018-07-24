import Component from "@ember/component";
import layout from "../../../../templates/components/toolbox-table/table-header/header-actions/block-action";

export default Component.extend({
  layout,
  tagName: "button",
  classNames: ["block-action"],

  click() {
    if (this.clicked) {
      this.clicked();
    }
  }
});
