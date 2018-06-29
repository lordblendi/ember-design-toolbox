import Component from '@ember/component';
import layout from '../templates/components/toolbox-selector-unit';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["selector__item"],
  classNameBindings: ["selected:selector__item--selected"],

  escapedStyle: Ember.computed("unit.prefix.color", function(){
    if(/^#[a-zA-Z0-9]{6}$/.test(this.get("unit.prefix.color")))
    return Ember.String.htmlSafe("background-color: " + this.get("unit.prefix.color"));
  }),

  actions: {
    toggleSelectUnit(unit) {
      if(this.get("selected")){
        return this.deselectUnit(unit);
      }
      return this.selectUnit(unit);
    }
  }
});
