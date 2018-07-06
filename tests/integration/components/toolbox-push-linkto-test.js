import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | toolbox-push-linkto', function() {
  setupComponentTest('toolbox-push-linkto', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-push-linkto}}
    //     template content
    //   {{/toolbox-push-linkto}}
    // `);

    this.render(hbs`{{toolbox-push-linkto "Title" "targetRoute"}}`);
    expect(this.$()).to.have.length(1);
  });
});
