import ToolboxSelectorComponent from './toolbox-selector';

export default ToolboxSelectorComponent.extend({
  singleSelect: true,

  truePrefixColor: null,
  truePrefixContent: "",
  trueLabel: null,
  trueField: null,
  trueUnit: Ember.computed("truePrefixColor", "truePrefixContent", "trueLabel", "trueField", function() {
    return new Ember.Object({
      prefix: {
        color: this.get("truePrefixColor"),
        content: this.get("truePrefixContent")
      },
      label: this.get("trueLabel"),
      field: this.get("trueField")
    })
  }),
  falsePrefixColor: null,
  falsePrefixContent: "",
  falseLabel: null,
  falseField: null,
  falseUnit: Ember.computed("falsePrefixColor", "falsePrefixContent", "falseLabel", "falseField", function() {
    return new Ember.Object({
      prefix: {
        color: this.get("falsePrefixColor"),
        content: this.get("falsePrefixContent")
      },
      label: this.get("falseLabel"),
      field: this.get("falseField")
    })
  }),

  possibleUnits: Ember.computed("trueUnit", "falseUnit", function() {
    const possible = Ember.A();
    possible.pushObject(this.get("trueUnit"));
    possible.pushObject(this.get("falseUnit"));
    return possible;
  }),

  selectedUnits: Ember.computed("trueUnit", "falseUnit", "checked", function() {
    const selected = Ember.A();
    if(this.get("checked") === true) {
      selected.push(this.get("trueUnit"));
    }
    else if(this.get("checked") === false) {
      selected.push(this.get("falseUnit"));
    }
    return selected;
  }),

  updateSelection: function(selection) {
    if(selection.includes(this.get("trueUnit"))) {
      return this.toggleChecked(true);
    }
    if(selection.includes(this.get("falseUnit"))) {
      return this.toggleChecked(false);
    }
    return this.toggleChecked(null);
  }
});
