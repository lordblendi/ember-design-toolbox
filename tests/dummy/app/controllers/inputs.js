import { computed } from "@ember/object";
import Controller from "@ember/controller";

export default Controller.extend({
  trigger: "",
  content: "<div>Something bad happened boss chief. </div>",

  newTrigger: computed(function() {
    return this.get("trigger");
  }),
  newContent: computed(function() {
    return this.get("content");
  })
});
