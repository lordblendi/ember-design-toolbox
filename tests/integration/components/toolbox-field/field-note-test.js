import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-field/field-note", function() {
  setupComponentTest("toolbox-field/field-note", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-field/field-note}}
    //     template content
    //   {{/toolbox-field/field-note}}
    // `);

    this.render(hbs`{{toolbox-field/field-note}}`);
    expect(this.$()).to.have.length(1);
  });
});
