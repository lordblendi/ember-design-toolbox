import Component from "@ember/component";
import layout from "../../templates/components/toolbox-overlays/overlay-body";
import { inject } from "@ember/service";
import { alias } from "@ember/object/computed";
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: "overlay-body",
  classNameBindings: [
    "isVisible:overlay-body--visible",
    "error:overlay-body--error",
    "tooltip:overlay-body--tooltip",
    "text:overlay-body--text"
  ],

  type: null,
  isVisible: false,

  click: function() {
    if (this.clicked) {
      this.clicked(this);
    }
  }
});
