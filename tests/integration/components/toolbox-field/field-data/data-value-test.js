import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-field/field-data/data-value", function() {
  setupComponentTest("toolbox-field/field-data/data-value", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-field/field-data/data-value}}
    //     template content
    //   {{/toolbox-field/field-data/data-value}}
    // `);

    this.render(hbs`{{toolbox-field/field-data/data-value}}`);
    expect(this.$()).to.have.length(1);
  });
});
