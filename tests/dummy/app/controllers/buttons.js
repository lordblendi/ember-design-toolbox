import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import { htmlSafe } from '@ember/template';

function generateUnit(color, prefix, label, field) {
  return new EmberObject({
    prefix: {
      color,
      content: prefix
    },
    label,
    field
  });
}

export default Controller.extend({
  options: computed(function(){
    const options = A();

    {
      const possible = A([generateUnit(null, null, null, "Light"), generateUnit(null, null, null, "Dark")]);
      const selected = A([possible.objectAt(0)]);
      options.pushObject(
        new EmberObject(
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
      const possible = A([generateUnit(null, null, null, "Buttons"), generateUnit(null, null, null, "Push")]);
      const selected = A();
      options.pushObject(
        new EmberObject(
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

  style: computed("backgroundColor", function(){
    return htmlSafe(`background-color: ${this.get("backgroundColor")}`);
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
      }
      else {
        this.set("backgroundColor", "#000000");
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
