import LinkComponent from "@ember/routing/link-component";
import ButtonBaseMixin from "../mixins/button-base";

export default LinkComponent.extend(ButtonBaseMixin, {
  classNames: ["toolbox-push"],
  classNameBindings: [
    "go:toolbox-push--go",
    "drop:toolbox-push--drop",
    "naked:toolbox-push--naked",
    "capitalized:toolbox-push--small-caps",
    "loading:animate-loading"
  ]
});
