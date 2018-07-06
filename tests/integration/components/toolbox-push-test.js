import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | toolbox-push', function() {
  setupComponentTest('toolbox-push', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-push}}
    //     template content
    //   {{/toolbox-push}}
    // `);

    this.render(hbs`{{toolbox-push}}`);
    expect(this.$()).to.have.length(1);
  });
});
