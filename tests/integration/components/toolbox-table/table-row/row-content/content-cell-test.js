import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-table/table-row/row-content/content-cell", function() {
  setupComponentTest("toolbox-table/table-row/row-content/content-cell", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-table/table-row/row-content/content-cell}}
    //     template content
    //   {{/toolbox-table/table-row/row-content/content-cell}}
    // `);

    this.render(hbs`{{toolbox-table/table-row/row-content/content-cell}}`);
    expect(this.$()).to.have.length(1);
  });
});
