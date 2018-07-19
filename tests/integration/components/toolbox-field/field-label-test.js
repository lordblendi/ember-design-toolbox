import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-field/field-label", function() {
  setupComponentTest("toolbox-field/field-label", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-field/field-label}}
    //     template content
    //   {{/toolbox-field/field-label}}
    // `);

    this.render(hbs`{{toolbox-field/field-label}}`);
    expect(this.$()).to.have.length(1);
  });
});
