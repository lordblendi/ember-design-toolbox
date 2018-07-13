import Component from "@ember/component";
import layout from "../templates/components/toolbox-selector";
import { A } from "@ember/array";
import { not, filterBy } from "@ember/object/computed";

export default Component.extend({
  layout,
  classNames: ["selector"],
  classNameBindings: [
    "expanded:selector--expanded",
    "readOnly:selector--readonly",
    "singleSelect:selector--singleselect",
    "multiSelect:selector--multiselect",
    "loading:animate-loading",
    "popupId"
  ],
  expanded: true,
  readOnly: false,
  singleSelect: false,
  multiSelect: not("singleSelect"),
  required: false,
  loading: false,

  init() {
    this._super(...arguments);
    this.set("items", A());
  },

  selectedItems: filterBy("items", "isSelected", true),

  actions: {
    selectItem(selected) {
      if (this.get("singleSelect")) {
        this.selectedItems.forEach(item => {
          item.handleUnselect();
        });
      }
      selected.handleSelect();
    },
    unselectItem(unselected) {
      if (this.get("required")) {
        if (
          this.get("selectedItems.length") === 1 &&
          this.get("selectedItems.firstObject") === unselected
        ) {
          return;
        }
      }
      unselected.handleUnselect();
    },

    registerItem(item) {
      if (!this.items.includes(item)) {
        this.items.pushObject(item);
      }
    },
    unregisterItem(item) {
      if (this.items.includes(item)) {
        this.items.removeObject(item);
      }
    }
  }
});
