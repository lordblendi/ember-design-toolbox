import Component from "@ember/component";
import layout from "../templates/components/toolbox-button";
import ButtonBaseMixin from "../mixins/button-base";

export default Component.extend(ButtonBaseMixin, {
  layout,
  tagName: "button",
  classNames: ["toolbox-button"],
  classNameBindings: [
    "go:toolbox-button--go",
    "drop:toolbox-button--drop",
    "naked:toolbox-button--naked",
    "capitalized:toolbox-button--small-caps",
    "loading:animate-loading"
  ],

  click: function() {
    if (this.clicked) {
      this.clicked();
    }
  }
});
