import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-modal", function() {
  setupComponentTest("toolbox-modal", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-modal}}
    //     template content
    //   {{/toolbox-modal}}
    // `);

    this.render(hbs`{{toolbox-modal}}`);
    expect(this.$()).to.have.length(1);
  });
});
