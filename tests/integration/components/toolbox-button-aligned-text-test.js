import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | toolbox-button-aligned-text', function() {
  setupComponentTest('toolbox-button-aligned-text', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-button-aligned-text}}
    //     template content
    //   {{/toolbox-button-aligned-text}}
    // `);

    this.render(hbs`{{toolbox-button-aligned-text}}`);
    expect(this.$()).to.have.length(1);
  });
});
