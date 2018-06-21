import Component from '@ember/component';
import layout from '../templates/components/toolbox-selector-unit';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["selector__item"],
  classNameBindings: ["selected:selector__item--selected"],

  actions: {
    toggleSelectUnit(unit) {
      if(this.get("selected")){
        return this.deselectUnit(unit);
      }
      return this.selectUnit(unit);
    }
  }
});
