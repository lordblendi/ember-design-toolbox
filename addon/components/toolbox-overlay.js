import Component from '@ember/component';
import layout from '../templates/components/toolbox-overlay';
import { inject } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: "overlay-body",
  classNameBindings: ["isVisible:overlay-body--visible", "error:overlay-body--error", "tooltip:overlay-body--tooltip"],

  toolboxOverlayBody: inject(),
  type: alias("toolboxOverlayBody.overlayType"),

  error: computed("type", "toolboxOverlayBody.types.error", function(){
    return this.get("type") === this.get("toolboxOverlayBody.types.error");
  }),
  tooltip: computed("type", "toolboxOverlayBody.types.tooltip", function(){
    return this.get("type") === this.get("toolboxOverlayBody.types.tooltip");
  }),

  click: function(event) {
    if(this.clicked) {
      this.clicked(event);
    }
  }
});
