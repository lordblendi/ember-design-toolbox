import Component from "@ember/component";
import layout from "../../../templates/components/toolbox-field/field-data/data-error";

export default Component.extend({
  layout,
  classNames: ["field__error"],

  overlayType: "error",
  useModal: true
});
