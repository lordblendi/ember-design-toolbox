import Component from "@ember/component";
import layout from "../../templates/components/toolbox-selector/selector-unit";
import { computed } from "@ember/object";
import { htmlSafe } from "@ember/template";

export default Component.extend({
  layout,
  tagName: "",

  // TODO: To be discussed with design, I feel like an unit should always be considered as a block but it's not the case in the current design
  //tagName: "div",
  //classNames: ["selector__block"],

  escapedStyle: computed("color", function() {
    if (/^#[a-zA-Z0-9]{6}$/.test(this.get("color")))
      return htmlSafe("background-color: " + this.get("color"));
  })
});
