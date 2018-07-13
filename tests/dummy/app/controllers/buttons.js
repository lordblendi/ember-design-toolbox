import Controller from "@ember/controller";
import EmberObject from "@ember/object";
import { computed } from "@ember/object";
import { A } from "@ember/array";
import { htmlSafe } from "@ember/template";

export default Controller.extend({
  style: computed("backgroundColor", function() {
    return htmlSafe(`background-color: ${this.get("backgroundColor")}`);
  }),
  isLightThemeSelected: true,
  loadingButtons: false,
  loadingPush: false,
  actions: {
    optIn() {
      window.alert("Welcome aboard. ");
    },
    optOut() {
      window.alert("Sorry to see you go. ");
    },
    setLoading(boolname, bool) {
      this.set(boolname, bool);
    },
    pickTheme(theme) {
      this.toggleProperty("isLightThemeSelected");
      this.set("backgroundColor", theme);
    }
  }
});
