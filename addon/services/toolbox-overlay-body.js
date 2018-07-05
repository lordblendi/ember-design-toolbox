import Service from '@ember/service';

export default Service.extend({
  isVisible: false,
  hide: function() {
    this.set("isVisible", false);
  },
  show: function() {
    this.set("isVisible", true);
  }
});
