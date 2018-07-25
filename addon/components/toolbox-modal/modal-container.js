import $ from "jquery";
import { throttle } from "@ember/runloop";
import { inject as service } from "@ember/service";
import Component from "@ember/component";
import layout from "../../templates/components/toolbox-modal/modal-container";

export default Component.extend({
  layout,
  classNames: ["toolbox-modal", "toolbox-modal--visible", "animate-fadein"],
  toolboxOverlayBody: service(),

  verticalOffset: -20,
  moveToTarget() {
    const target = this.get("target");

    if (!target) return false;

    // Let's set the width of the modal to the width of its target. If it's less than the min-width, it will automatically be resized.
    this.$().width(target.outerWidth());

    // If the right edge of the modal goes out of the screen, we align on the right edge instead.
    if (
      target.offset().left + this.$().outerWidth() >
      $("body")[0].scrollWidth
    ) {
      // Use right edge
      this.$().offset({
        top:
          target.offset().top +
          target.outerHeight() +
          this.get("verticalOffset"),
        left: target.offset().left + target.outerWidth() - this.$().outerWidth()
      });
    } else {
      // Use left edge
      this.$().offset({
        top:
          target.offset().top +
          target.outerHeight() +
          this.get("verticalOffset"),
        left: target.offset().left
      });
    }
  },
  didRender() {
    this.moveToTarget();
  },
  onResize() {
    throttle(this, this.moveToTarget, 500);
    return true;
  },
  willInsertElement() {
    this.get("toolboxOverlayBody").registerClickedListener(this);
    this.$(window).resize(this.onResize.bind(this));
  },
  willDestroyElement() {
    this.get("toolboxOverlayBody").unregisterClickedListener(this);
    this.$(window).off("resize");
  },
  overlayBodyClicked() {
    throttle(() => {
      if (this.clickedOutside) {
        this.clickedOutside();
      }
    }, 150);
  }
});
