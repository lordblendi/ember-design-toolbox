import Component from '@ember/component';
import layout from '../templates/components/toolbox-button';
import ButtonBaseMixin from '../mixins/button-base';

export default Component.extend(ButtonBaseMixin, {
  layout,
  tagName: "button",

  click: function() {
    if(this.clicked) {
      this.clicked();
    }
  }
});
