import $ from "jquery";
import { computed } from "@ember/object";
import Component from "@ember/component";
import layout from "../../templates/components/toolbox-modal/modal-content";
import { assert } from "@ember/debug";

export default Component.extend({
  layout,
  tagName: "",

  isVisible: false,
  destination: computed(function() {
    const dest = $(".toolbox-overlay--modal")[0];
    assert(
      "The modal overlay could not be found, please ensure you provided one.",
      !!dest
    );
    return dest;
  }),

  actions: {
    clickedOutside() {
      if (this.clickedOutside) {
        this.clickedOutside();
      }
    }
  }
});
