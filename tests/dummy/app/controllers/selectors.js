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
  sections: Ember.computed.alias("model"),

  options: Ember.computed(function(){
    const options = Ember.A();

    {
      const possible = Ember.A([generateUnit(null, null, null, "Light"), generateUnit(null, null, null, "Dark")]);
      const selected = Ember.A([possible.objectAt(0)]);
      options.pushObject(
        new Ember.Object(
          {
            label: "Theme",
            expanded: true,
            singleSelect: true,
            required: true,
            readOnly: false,
            action: "pickTheme",
            possible,
            selected
          }
        )
      );
    }

    {
      const possible = Ember.A([generateUnit(null, null, null, "Selectors")]);
      const selected = Ember.A();
      options.pushObject(
        new Ember.Object(
          {
            label: "Loading",
            expanded: true,
            singleSelect: false,
            required: false,
            readOnly: false,
            action: "pickLoading",
            possible,
            selected
          }
        )
      );
    }
    return options;
  }),

  style: Ember.computed("backgroundColor", function(){
    return Ember.String.htmlSafe(`background-color: ${this.get("backgroundColor")}`);
  }),
  loadingSelectors: false,

  loading: false,
  actions: {
    updateSelection(example, selection) {
      example.set("selected", selection);
    },
    pickTheme(option, selection) {
      if(selection[0].field === "Light") {
        this.set("backgroundColor", "#FFFFFF");
      }
      else {
        this.set("backgroundColor", "#000000");
      }
      option.set("selected", selection);
    },
    pickLoading(option, selection) {
      const selected = selection.map(function(item){return item.field;});
      if(selected.includes("Selectors")){
        this.set("loadingSelectors", true);
      }
      else {
        this.set("loadingSelectors", false);
      }
      option.set("selected", selection);
    }
  }
});
