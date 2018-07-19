import { scheduleOnce } from "@ember/runloop";
import { observer } from "@ember/object";
import { on } from "@ember/object/evented";
import { inject as service } from "@ember/service";
import TextField from "@ember/component/text-field";

export default TextField.extend({
  classNames: ["field__input"],

  toolboxOverlayBody: service(),

  checkIfEmpty: on(
    "init",
    observer("value.length", function() {
      scheduleOnce("afterRender", this, this.checkValue);
    })
  ),

  checkValue() {
    if (this.get("value.length")) {
      this.set("empty", false);
    } else {
      this.set("empty", true);
    }
  },

  focusIn() {
    this.set("focus", true);
    this.get("toolboxOverlayBody").show(
      this.get("tooltboxOverlayBody.types.text")
    );
  },
  focusOut() {
    this.set("focus", false);
    this.get("toolboxOverlayBody").hide();
  }
});
