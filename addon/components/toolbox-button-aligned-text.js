import Component from "@ember/component";
import layout from "../templates/components/toolbox-button-aligned-text";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["inline", "align-baseline", "mx-1"]
});
