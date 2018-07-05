import Route from '@ember/routing/route';

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

export default Route.extend({
  model: function () {
    const sections = Ember.A();


    {
      const subSections = Ember.A();
      {
        const examples = Ember.A();


        {
          const possible = Ember.A([generateUnit(colors["green"], null, null, "Not started"), generateUnit(colors["yellow"], null, null, "Ongoing"), generateUnit(colors["red"], null, null, "Finished")]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "SINGLE SELECT: EXPANDED",
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
                type: "selector",
                label: "SINGLE SELECT: EXPANDED AND REQUIRED (YOU CANNOT UNSELECT ALL OF THEM)",
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
                type: "selector",
                label: "SINGLE SELECT: EXPANDED AND READONLY",
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
                type: "selector",
                label: "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) - NO POPUP ATTACHED",
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
                type: "selector",
                label: "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) AND READONLY",
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

        subSections.pushObject(new Ember.Object({
          label: "Single select configuration examples without popup",
          examples
        }));

      }

      {
        const examples = Ember.A();

        {
          const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend-team"), generateUnit(colors["yellow"], "", null, "297")]);
          const selected = Ember.A([possible.objectAt(0), possible.objectAt(1)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "MULTI SELECT: EXPANDED",
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
                type: "selector",
                label: "MULTI SELECT: EXPANDED AND REQUIRED (AT LEAST ONE HAS TO BE SELECTED)",
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
                type: "selector",
                label: "MULTI SELECT: EXPANDED AND READONLY",
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
                type: "selector",
                label: "MULTI SELECT: NOT EXPANDED",
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
                type: "selector",
                label: "MULTI SELECT: NOT EXPANDED AND READONLY ==> WIP",
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

        subSections.pushObject(new Ember.Object({
          label: "Multi select configuration examples without popup",
          examples
        }));
      }
      sections.pushObject(new Ember.Object({subSection: subSections}));
    }

    {
      const subSections = Ember.A();
      {
        const examples = Ember.A();


        {
          const possible = Ember.A([generateUnit(null, "", null, null), generateUnit(null, Ember.String.htmlSafe("<sup>11</sup>"), null, null), generateUnit(null, "", null, null), generateUnit(null, "", null, null)]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "PANEL SELECTOR",
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
          const possible = Ember.A([generateUnit(colors["green"], "Low", null, null), generateUnit(colors["yellow"], "Medium", null, null), generateUnit(colors["red"], "High", null, null)]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "DANGER LEVEL",
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
                type: "selector",
                label: "STATUS",
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
          const possible = Ember.A([generateUnit(colors["yellow"], "", null, "Not started"), generateUnit(colors["blue"], "", null, "Ongoing"), generateUnit(colors["green"], "", null, "Finished")]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "STATUS",
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
          const possible = Ember.A([generateUnit(colors["green"], "", null, "dev-team"), generateUnit(colors["blue"], "", null, "backend"), generateUnit(colors["yellow"], "", null, "297")]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "TAGS",
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
          const possible = Ember.A([generateUnit(colors["yellow"], "", null, "Heet"), generateUnit(colors["red"], "", null, "Brandbaar"), generateUnit(colors["red"], "", null, "Huidopname")]);
          const selected = Ember.A([possible.objectAt(0)]);
          examples.pushObject(
            new Ember.Object(
              {
                type: "selector",
                label: "PRODUCT CONTACT",
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

        subSections.pushObject(new Ember.Object({
          label: "Examples without popup",
          examples
        }));

      }

      {
        const examples = Ember.A();

        subSections.pushObject(new Ember.Object({
          label: "Examples with popup"
          //examples
        }));
      }

      {
        const examples = Ember.A();

        {
          examples.pushObject(
            new Ember.Object(
              {
                type: "checkbox",
                label: "CHECKBOX",
                expanded: true,
                required: false,
                readOnly: false,
                checked: null
              }
            )
          );
        }
        {
          examples.pushObject(
            new Ember.Object(
              {
                type: "checkbox",
                label: "CHECKBOX - COLORED ",
                expanded: true,
                required: false,
                readOnly: false,
                checked: null,
                truePrefixColor: colors["green"]
              }
            )
          );
        }

        subSections.pushObject(new Ember.Object({
          label: "Checkboxes",
          examples
        }));
      }

      sections.pushObject(new Ember.Object({subSection: subSections}));
    }

    return sections;
  }
});
