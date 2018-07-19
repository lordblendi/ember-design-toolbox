import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-overlays/overlay-modal", function() {
  setupComponentTest("toolbox-overlays/overlay-modal", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-overlays/overlay-modal}}
    //     template content
    //   {{/toolbox-overlays/overlay-modal}}
    // `);

    this.render(hbs`{{toolbox-overlays/overlay-modal}}`);
    expect(this.$()).to.have.length(1);
  });
});
