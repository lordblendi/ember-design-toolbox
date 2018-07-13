import Controller from "@ember/controller";
import $ from "jquery";
import EmberObject from "@ember/object";
import { computed } from "@ember/object";
import { A } from "@ember/array";
import { alias } from "@ember/object/computed";

export default Controller.extend({
  sections: alias("model"),
  inverted: false,
  width: "1/4",

  actions: {
    pickWidth(width) {
      this.set("width", width);
      $(window).resize();
    },
    setInvert(bool) {
      this.set("inverted", bool);
    }
  }
});
