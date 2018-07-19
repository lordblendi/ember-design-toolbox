import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-field/field-data/data-value/value-input", function() {
  setupComponentTest("toolbox-field/field-data/data-value/value-input", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-field/field-data/data-value/value-input}}
    //     template content
    //   {{/toolbox-field/field-data/data-value/value-input}}
    // `);

    this.render(hbs`{{toolbox-field/field-data/data-value/value-input}}`);
    expect(this.$()).to.have.length(1);
  });
});
