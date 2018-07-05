import Component from '@ember/component';
import layout from '../templates/components/toolbox-overlay';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: "overlay-body",
  classNameBindings: ["isVisible:overlay-body--visible", "error:overlay-body--error", "tooltip:overlay-body--tooltip"],

  error: Ember.computed.equal("type", "error"),
  tooltip: Ember.computed.equal("type", "tooltip"),

  click: function(event) {
    if(this.clicked) {
      this.clicked(event);
    }
  }
});
