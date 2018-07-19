import Component from "@ember/component";
import layout from "../templates/components/toolbox-push";
import ButtonBaseMixin from "../mixins/button-base";

const toolboxPushComponent = Component.extend(ButtonBaseMixin, {
  layout,
  tagName: "a",
  classNames: ["toolbox-push"],
  classNameBindings: [
    "go:toolbox-push--go",
    "drop:toolbox-push--drop",
    "naked:toolbox-push--naked",
    "capitalized:toolbox-push--small-caps",
    "loading:animate-loading"
  ],
  attributeBindings: ["href", "target"],
  usePositionalParams: false,

  target: "_self",

  didReceiveAttrs() {
    let params = this.get("params");
    if (params) {
      // Do not mutate params in place
      params = params.slice();
    } else {
      return;
    }

    if (!this.get("href")) {
      this.set("href", params.shift());
    }
  }
});

toolboxPushComponent.reopenClass({
  positionalParams: "params"
});

export default toolboxPushComponent;
