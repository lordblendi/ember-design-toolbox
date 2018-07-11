import $ from "jquery";
import Controller from "@ember/controller";
import EmberObject from "@ember/object";
import { computed } from "@ember/object";
import { A } from "@ember/array";
import { alias } from "@ember/object/computed";

function generateUnit(color, prefix, label, field) {
  return new EmberObject({
    prefix: {
      color,
      content: prefix
    },
    label,
    field
  });
}

export default Controller.extend({
  sections: alias("model"),
  options: computed(function() {
    const options = A();

    {
      const possible = A([
        generateUnit(null, null, null, "Normal"),
        generateUnit(null, null, null, "Invert")
      ]);
      const selected = A([possible.objectAt(0)]);
      options.pushObject(
        new EmberObject({
          label: "Theme",
          expanded: true,
          singleSelect: true,
          required: true,
          readOnly: false,
          action: "pickTheme",
          possible,
          selected
        })
      );
    }

    {
      const possible = A([
        generateUnit(null, null, null, "25%"),
        generateUnit(null, null, null, "75%")
      ]);
      const selected = A([possible.objectAt(0)]);
      options.pushObject(
        new EmberObject({
          label: "Tabs panel width",
          expanded: true,
          singleSelect: true,
          required: true,
          readOnly: false,
          action: "pickWidth",
          possible,
          selected
        })
      );
    }

    return options;
  }),
  inverted: false,
  width: "1/4",

  actions: {
    pickTheme(option, selection) {
      if (selection[0].field === "Normal") {
        this.set("inverted", false);
      } else {
        this.set("inverted", true);
      }
      option.set("selected", selection);
    },
    pickWidth(option, selection) {
      if (selection[0].field === "25%") {
        this.set("width", "1/4");
      } else {
        this.set("width", "3/4");
      }
      $(window).resize();
      option.set("selected", selection);
    }
  }
});
