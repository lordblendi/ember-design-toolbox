import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-modal/modal-trigger", function() {
  setupComponentTest("toolbox-modal/modal-trigger", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-modal/modal-trigger}}
    //     template content
    //   {{/toolbox-modal/modal-trigger}}
    // `);

    this.render(hbs`{{toolbox-modal/modal-trigger}}`);
    expect(this.$()).to.have.length(1);
  });
});
