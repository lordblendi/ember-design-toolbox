import { or } from "@ember/object/computed";
import Component from "@ember/component";
import layout from "../../../templates/components/toolbox-table/table-row/row-content";
import RegisterableComponent from "../../../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "ul",
  classNames: ["toolbox-table__rowInner"],
  classNameBindings: [
    "isHeader:toolbox-table__rowInner--thead",
    "isFooter:toolbox-table__rowInner--tfoot",
    "isHeaderOrFooter::toolbox-table__rowInner--item"
  ],

  isHeader: false,
  isFooter: false,
  isHeaderOrFooter: or("isHeader", "isFooter")
});
