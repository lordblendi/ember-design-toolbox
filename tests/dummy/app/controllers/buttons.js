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
      const possible = Ember.A([generateUnit(null, null, null, "Buttons"), generateUnit(null, null, null, "Push")]);
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
  loadingButtons: false,
  loadingPush: false,
  actions: {
    optIn() {
      window.alert("Welcome aboard. ");
    },
    optOut() {
      window.alert("Sorry to see you go. ");
    },
    pickTheme(option, selection) {
      if(selection[0].field === "Light") {
        this.set("backgroundColor", "#FFFFFF");
        console.log("GO LIGHT");
      }
      else {
        this.set("backgroundColor", "#000000");
        console.log("GO DARK");
      }
      option.set("selected", selection);
    },
    pickLoading(option, selection) {
      const selected = selection.map(function(item){return item.field;});
      if(selected.includes("Buttons")){
        this.set("loadingButtons", true);
      }
      else {
        this.set("loadingButtons", false);
      }

      if(selected.includes("Push")){
        this.set("loadingPush", true);
      }
      else {
        this.set("loadingPush", false);
      }
      option.set("selected", selection);
    }
  }
});
