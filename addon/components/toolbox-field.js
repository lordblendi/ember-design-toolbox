import Component from "@ember/component";
import layout from "../templates/components/toolbox-field";

export default Component.extend({
  layout,
  classNames: ["toolbox-field"],
  classNameBindings: [
    "showError:toolbox-field--error",
    "empty::toolbox-field--not-empty",
    "focus:toolbox-field--focus"
  ],

  showError: false,
  empty: false,
  focus: false
});
