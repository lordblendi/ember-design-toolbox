import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set("types", {
      error: "error",
      tooltip: "tooltip"
    })
  },
  isVisible: false,
  hide: function() {
    this.set("isVisible", false);
  },
  show: function(type) {
    this.set("overlayType", type);
    this.set("isVisible", true);
  }
});
