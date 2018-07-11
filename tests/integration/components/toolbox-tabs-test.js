import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-tabs", function() {
  setupComponentTest("toolbox-tabs", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-tabs}}
    //     template content
    //   {{/toolbox-tabs}}
    // `);

    this.render(hbs`{{toolbox-tabs}}`);
    expect(this.$()).to.have.length(1);
  });
});
