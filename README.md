ember-design-toolbox
==============================================================================

[Short description of the addon.]

Installation
------------------------------------------------------------------------------

```
ember install ember-design-toolbox
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-design-toolbox`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).


### TODOS:
* Document difference between toolbox-push and toolbox-push-linkto
* Write examples and/or a tool to configure your component
* Add prettier

### NOTES:
* Right now, a checkbox is singleSelect (although you can force it to be multiSelect but then switching between true and false doesn't work smoothly)
* The non-expanded read-only selectors do not look like the mock-up right now as the mock-up still provides the "expanded" class when non-expanded.