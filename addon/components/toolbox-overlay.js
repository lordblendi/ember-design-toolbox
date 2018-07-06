import Component from '@ember/component';
import layout from '../templates/components/toolbox-overlay';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: "overlay-body",
  classNameBindings: ["isVisible:overlay-body--visible", "error:overlay-body--error", "tooltip:overlay-body--tooltip"],

  toolboxOverlayBody: Ember.inject.service(),
  type: Ember.computed.alias("toolboxOverlayBody.overlayType"),

  error: Ember.computed("type", "toolboxOverlayBody.types.error", function(){
    return this.get("type") === this.get("toolboxOverlayBody.types.error");
  }),
  tooltip: Ember.computed("type", "toolboxOverlayBody.types.tooltip", function(){
    return this.get("type") === this.get("toolboxOverlayBody.types.tooltip");
  }),

  click: function(event) {
    if(this.clicked) {
      this.clicked(event);
    }
  }
});
