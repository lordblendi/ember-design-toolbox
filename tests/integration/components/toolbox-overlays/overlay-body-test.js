import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-overlays/overlay-body", function() {
  setupComponentTest("toolbox-overlays/overlay-body", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-overlays/overlay-body}}
    //     template content
    //   {{/toolbox-overlays/overlay-body}}
    // `);

    this.render(hbs`{{toolbox-overlays/overlay-body}}`);
    expect(this.$()).to.have.length(1);
  });
});
