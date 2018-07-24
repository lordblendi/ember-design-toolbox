import Component from "@ember/component";
import layout from "../../../templates/components/toolbox-table/table-row/row-trigger";
import RegisterableComponent from "../../../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "button",
  classNames: ["toolbox-table__action"],

  isExpanded: false,

  click() {
    if (this.clicked) {
      this.clicked(this);
    }
  }
});
