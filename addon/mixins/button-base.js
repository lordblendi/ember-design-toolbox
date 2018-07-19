import Mixin from "@ember/object/mixin";
import { computed } from "@ember/object";
import { equal } from "@ember/object/computed";

export default Mixin.create({
  type: computed(function() {
    return "";
  }),
  go: equal("type", "go"),
  drop: equal("type", "drop"),
  naked: equal("type", "naked")
});
