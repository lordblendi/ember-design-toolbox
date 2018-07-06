import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("buttons");
  this.route("comments");
  this.route("selectors");
  this.route("inputs");
  this.route("itembox");
  this.route("popups");
  this.route("tabs");
});

export default Router;
