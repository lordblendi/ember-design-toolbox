import Component from "@ember/component";
import layout from "../templates/components/toolbox-selector";
import { A } from "@ember/array";

export default Component.extend({
  layout,
  classNames: ["selector"],
  classNameBindings: [
    "expanded:selector--expanded",
    "readOnly:selector--readonly",
    "singleSelect:selector--singleselect:selector--multiselect",
    "loading:animate-loading",
    "popupId"
  ],
  expanded: true,

  possibleUnits: A(),
  selectedUnits: A(),

  selectUnit: function(unit) {
    if (this.get("singleSelect")) {
      return this.updateSelection([unit]);
    }

    if (!this.get("selectedUnits").includes(unit)) {
      const newSelection = A();
      this.get("selectedUnits").forEach(item => {
        newSelection.pushObject(item);
      });
      newSelection.pushObject(unit);
      return this.updateSelection(newSelection);
    }
  },
  deselectUnit: function(unit) {
    if (this.get("required")) {
      if (
        this.get("selectedUnits.length") === 1 &&
        this.get("selectedUnits.firstObject") == unit
      ) {
        return;
      }
    }
    if (this.get("selectedUnits").includes(unit)) {
      const newSelection = A();
      this.get("selectedUnits").forEach(item => {
        newSelection.pushObject(item);
      });
      newSelection.removeObject(unit);
      return this.updateSelection(newSelection);
    }
  },

  actions: {
    selectUnit(unit) {
      this.selectUnit(unit);
    },
    deselectUnit(unit) {
      this.deselectUnit(unit);
    }
  }
});
