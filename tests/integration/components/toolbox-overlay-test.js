import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-overlay", function() {
  setupComponentTest("toolbox-overlay", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-overlay}}
    //     template content
    //   {{/toolbox-overlay}}
    // `);

    this.render(hbs`{{toolbox-overlay}}`);
    expect(this.$()).to.have.length(1);
  });
});
