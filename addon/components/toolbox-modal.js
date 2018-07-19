import { observer, computed } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@ember/component";
import layout from "../templates/components/toolbox-modal";

export default Component.extend({
  layout,
  tagName: "div",
  toolboxOverlayBody: service(),

  showModal: false,

  showModalDidChange: observer("showModal", function() {
    if (this.get("showModal")) {
      this.get("toolboxOverlayBody").show(this.get("overlayType"));
    } else {
      this.get("toolboxOverlayBody").hide();
    }
  }),

  clickedTriggerElement: computed(function() {
    // We set the default selected trigger as the first one, though it should be overridden by user interaction.
    return this.$(".trigger").first();
  }),

  // Can be overridden to change behavior
  clickedTrigger() {
    this.set("showModal", true);
  },
  // Can be overridden to change behavior
  clickedOutside() {
    this.set("showModal", false);
  },

  actions: {
    handleClickedTrigger(trigger) {
      // We set the new clickedTrigger.
      this.set("clickedTriggerElement", trigger.$());
      if (this.clickedTrigger) {
        this.clickedTrigger(this);
      }
    },
    handleClickedOutside() {
      if (this.clickedOutside) {
        this.clickedOutside(this);
      }
    }
  }
});
