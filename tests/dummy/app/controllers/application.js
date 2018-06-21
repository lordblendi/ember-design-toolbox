import Controller from '@ember/controller';

const colors = {
  "green": "#0BDA51",
  "yellow": "#F4CA16",
  "red": "#e61616",
  "blue": "#00BFFF"
};

function generateUnit(color, prefix, label, field) {
  return new Ember.Object({
    prefix: {
      color,
      content: prefix
    },
    label,
    field
  });
}


export default Controller.extend({
  init: function () {
    this._super(...arguments);
    const examples = Ember.A();

    {
      const possible = Ember.A([generateUnit(colors["green"], null, null, "Not started"), generateUnit(colors["yellow"], null, null, "Ongoing"), generateUnit(colors["red"], null, null, "Finished")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "SINGLE SELECT: EXPANDED",
            expanded: true,
            singleSelect: true,
            required: false,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], null, null, "Not started"), generateUnit(colors["yellow"], null, null, "Ongoing"), generateUnit(colors["red"], null, null, "Finished")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "SINGLE SELECT: EXPANDED AND REQUIRED (YOU CANNOT UNSELECT ALL OF THEM)",
            expanded: true,
            singleSelect: true,
            required: true,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], null, null, "Not started"), generateUnit(colors["yellow"], null, null, "Ongoing"), generateUnit(colors["red"], null, null, "Finished")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "SINGLE SELECT: EXPANDED AND READONLY",
            expanded: true,
            singleSelect: true,
            required: false,
            readOnly: true,
            possible,
            selected
          }
        )
      );
    }


    {
      const possible = Ember.A([generateUnit(colors["yellow"], null, null, "Ongoing")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) - NO POPUP ATTACHED ==> WIP",
            expanded: false,
            singleSelect: true,
            required: false,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["yellow"], null, null, "Ongoing")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) AND READONLY ==> WIP",
            expanded: false,
            singleSelect: true,
            required: false,
            readOnly: true,
            possible,
            selected
          }
        )
      );
    }


    {
      const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
      const selected = Ember.A([possible.objectAt(0), possible.objectAt(1)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "MULTI SELECT: EXPANDED",
            expanded: true,
            singleSelect: false,
            required: false,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
      const selected = Ember.A([possible.objectAt(0)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "MULTI SELECT: EXPANDED AND REQUIRED (AT LEAST ONE HAS TO BE SELECTED)",
            expanded: true,
            singleSelect: false,
            required: true,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
      const selected = Ember.A([possible.objectAt(0), possible.objectAt(1)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "MULTI SELECT: EXPANDED AND READONLY",
            expanded: true,
            singleSelect: false,
            required: false,
            readOnly: true,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
      const selected = Ember.A([possible.objectAt(0), possible.objectAt(1)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "MULTI SELECT: NOT EXPANDED ==> WIP",
            expanded: false,
            singleSelect: false,
            required: false,
            readOnly: false,
            possible,
            selected
          }
        )
      );
    }
    {
      const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
      const selected = Ember.A([possible.objectAt(0), possible.objectAt(1)]);
      examples.pushObject(
        new Ember.Object(
          {
            title: "MULTI SELECT: NOT EXPANDED AND READONLY ==> WIP",
            expanded: false,
            singleSelect: false,
            required: false,
            readOnly: true,
            possible,
            selected
          }
        )
      );
    }

    this.set("examples", examples);
  },
  actions: {
    updateSelection(example, selection) {
      example.set("selected", selection);
    }
  }
});
