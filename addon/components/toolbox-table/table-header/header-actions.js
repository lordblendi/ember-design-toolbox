import Component from "@ember/component";
import layout from "../../../templates/components/toolbox-table/table-header/header-actions";
import RegisterableComponent from "../../../mixins/registerable-component";

export default Component.extend(RegisterableComponent, {
  layout,
  tagName: "div",
  classNames: ["header__actions"]
});
