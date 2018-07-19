import Component from "@ember/component";
import layout from "../../templates/components/toolbox-modal/modal-trigger";

export default Component.extend({
  layout,
  classNames: ["trigger"],

  click() {
    if (this.clicked) {
      this.clicked(this);
    }
  }
});
