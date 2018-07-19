import Component from "@ember/component";
import layout from "../templates/components/toolbox-field";

export default Component.extend({
  layout,
  classNames: ["field"],
  classNameBindings: [
    "showError:field--error",
    "empty::field--not-empty",
    "focus:field--focus"
  ],

  showError: false,
  empty: false,
  focus: false
});
