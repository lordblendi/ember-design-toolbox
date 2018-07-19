import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject } from "@ember/service";

export default Controller.extend({
  toolboxOverlayBody: inject(),

  trigger: "<button>Please press me.</button>",
  content: "<div>I am a modal.</div>",

  newTrigger: computed(function() {
    return this.get("trigger");
  }),
  newContent: computed(function() {
    return this.get("content");
  }),

  actions: {
    showOverlay(type) {
      this.get("toolboxOverlayBody").show(type);
    }
  }
});
