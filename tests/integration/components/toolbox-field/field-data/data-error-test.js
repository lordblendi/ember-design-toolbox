import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-field/field-data/data-error", function() {
  setupComponentTest("toolbox-field/field-data/data-error", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-field/field-data/data-error}}
    //     template content
    //   {{/toolbox-field/field-data/data-error}}
    // `);

    this.render(hbs`{{toolbox-field/field-data/data-error}}`);
    expect(this.$()).to.have.length(1);
  });
});
