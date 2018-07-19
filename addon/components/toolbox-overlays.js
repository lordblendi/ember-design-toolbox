import Component from "@ember/component";
import layout from "../templates/components/toolbox-overlays";
import { inject } from "@ember/service";
import { alias } from "@ember/object/computed";
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  tagName: "",

  toolboxOverlayBody: inject(),
  // Those properties are stored in the service so they can be modified by other components
  type: alias("toolboxOverlayBody.overlayType"),
  isVisible: alias("toolboxOverlayBody.isVisible"),

  error: computed("type", "toolboxOverlayBody.types.error", function() {
    return this.get("type") === this.get("toolboxOverlayBody.types.error");
  }),
  tooltip: computed("type", "toolboxOverlayBody.types.tooltip", function() {
    return this.get("type") === this.get("toolboxOverlayBody.types.tooltip");
  }),
  text: computed("type", "toolboxOverlayBody.types.text", function() {
    return this.get("type") === this.get("toolboxOverlayBody.types.text");
  }),

  overlayBodyClicked() {
    this.set("isVisible", false);
  },

  actions: {
    handleOverlayBodyClicked() {
      this.get("toolboxOverlayBody").clicked();
      if (this.overlayBodyClicked) {
        this.overlayBodyClicked();
      }
    }
  }
});
