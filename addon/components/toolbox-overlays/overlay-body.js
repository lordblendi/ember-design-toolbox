import Component from "@ember/component";
import layout from "../../templates/components/toolbox-overlays/overlay-body";
import { inject } from "@ember/service";
import { alias } from "@ember/object/computed";
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: "toolbox-overlay",
  classNameBindings: [
    "isVisible:toolbox-overlay--visible",
    "error:toolbox-overlay--error",
    "tooltip:toolbox-overlay--tooltip",
    "text:toolbox-overlay--text"
  ],

  type: null,
  isVisible: false,

  click: function() {
    if (this.clicked) {
      this.clicked(this);
    }
  }
});
