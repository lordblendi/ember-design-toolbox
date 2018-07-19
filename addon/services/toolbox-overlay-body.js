import { scheduleOnce } from "@ember/runloop";
import { A } from "@ember/array";
import Service from "@ember/service";

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set("listeners", A());
    this.set("types", {
      error: "error",
      tooltip: "tooltip",
      text: "text"
    });
  },
  isVisible: false,

  show(type) {
    scheduleOnce("afterRender", () => {
      this.set("overlayType", type);
      this.set("isVisible", true);
    });
  },

  hide() {
    scheduleOnce("afterRender", () => {
      this.set("isVisible", false);
    });
  },

  clicked() {
    this.get("listeners").forEach(listener => {
      listener.overlayBodyClicked();
    });
  },

  registerClickedListener(listener) {
    if (this.get("listeners").includes(listener)) {
      return;
    }
    this.get("listeners").pushObject(listener);
  },
  unregisterClickedListener(listener) {
    this.get("listeners").removeObject(listener);
  }
});
