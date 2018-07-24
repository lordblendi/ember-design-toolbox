import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-table/table-row/row-content", function() {
  setupComponentTest("toolbox-table/table-row/row-content", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-table/table-row/row-content}}
    //     template content
    //   {{/toolbox-table/table-row/row-content}}
    // `);

    this.render(hbs`{{toolbox-table/table-row/row-content}}`);
    expect(this.$()).to.have.length(1);
  });
});
