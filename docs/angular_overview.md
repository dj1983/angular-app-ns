# AngularJS basic concepts

## Modules

Use modules to encapsulate code so that keep away from global namespace. It's easy for testing and ready for reuse.
```javascript
angular.module('myApp', [/*?injectables*/]); // Define a module
// injectables will be loaded before this module loads

angular.module('myApp');     // Get 'myAp' module reference
```

## Scopes

The scopes of the application refer to the application *model*.  
Scopes are the execution context for expressions.

**Scopes are the source of truth** for the application state.

### $scope

* The `$scope` is like a bridge between view(DOM) and controller.  
* The `$scope` object is where we define the business functinality of the application, the methods in our controllers, and properties in the views.  
* `$scope`s have a hierarchical structure. That's to say we can reference properties on parent `$scope`s from a child `$scope`. It's just like create a nested context in JavaScript.  
* `$scope` is just a plain old JavaScript object.  
* **All properties found on the $scope object are automatically accessible to the view.**


#### $rootScope

When our Angular application starts, it will bind the `ng-app` element to the `$rootScope`.  
`$rootScope` is the outer-most scope, it's the eventual parent of all `$scope` objects in your application.  
- [ ] Global context
  - [ ] $rootScope
    - [ ] $scopes

### $scope Lifecycle

1. Creation  
When we create a controller or directive, Angular creates a new scope and passes it to the controller or directive.
2. Linking  
`$scope` is linked to the view and directives register watches.
3. Updating  
During the `$digest` cycle, which executes on the `$rootScope`, all of the children scopes will perform dirty digest checking.
4. Destruction  
When `$scope` is no longer needed, the child scope creator will need to call `scope.$destroy()` to clean up the child scope.

### Directives and Scopes

Directives generally don't create their own `$scope`s, but there're cases when they do. For example, `ng-controller` and `ng-repeat` directives create their own child scopes and attach them to the DOM element.

## Controllers

The controller function takes one parameter, the `$scope` of the DOM element. This `$scope` object is available on the element and the controller, and it will be the bridge by which we'll communicate from the controller to the view.

## Expressions

Notation: {{expression}}

* All expressions are executed in the context of the scope and have access to local `$scope` variables.
* An expression doesn't throw errors if it results in a *TypeError* or a *ReferenceError*.
* They do not allow for any control flow functions (if / else)
* They can accept a filter and/or filter chains.

Angular evaluates expressions by an internal service `$parse`.

## Filters

A filter provides a way to format the data we display to the user.  
If we apply a filter on an array, it will return a new filtered array.

Angular filters:
* currency
* date
* filter
* json (Format json object to a string)
* limitTo (Get the given number of items)
* lowercase
* number
* orderBy
* uppercase

## Form Validation

```html
<form name="myForm" novalidate>
  <label name="email">Your email</label>
  <input type="email" name="email" ng-model="email" placeholder="Email Address" />
</form>
```

**We must ensure that the form has a `name` attribute associated with it.** Like `myForm` in above example.

List of all the validation options we have that we can place on an input field:

| Options      | Example                                   |
| :----------: | ----------------------------------------- |
| required     | `<input type="text" required>`            |
| ng-minlength | `<input type="text" ng-minlength=10>`     |
| ng-maxlength | `<input type="text" ng-minlength=10>`     |
| ng-pattern   | `<input type="text" ng-pattern=/a-zA-Z/>` |
| email        | `<input type="email">`                    |
| number       | `<input type="number">`                   |
| url          | `<input type="url">`                      |

### Control Variables in Forms

We could control the form status in real-time by the following variables:
( Common format: formName.inputFieldName.property )

| Form Status      | Angular Syntax                      | Returns                                                           |
| ---------------- | ------------------------------------|------------------------------------------------------------------ |
| Unmodified form? | `formName.inputFieldName.$pristine` | `true`: if user hasn't touched the form  `false`: if they have    |
| Modified form?   | `formName.inputFieldName.$dirty`    | `true`: if user has modified the form  `false`: if they haven't   |
| Valid form?      | `formName.inputFieldName.$valid`    | `true`: for valid  `false`: for invalid                           |
| Invalid form?    | `formName.inputFieldName.$invalid`  | `true`: for invalid  `false`: for valid                           |
| Errors           | `formName.inputFieldName.$error`    | This object contains all of the validations on a particular form. |

#### One more word on `formName.inputFieldName.$error`

For example, we have the html code like this:
```html
<form action="" class="login-form" name="loginForm">
  <input autofocus="autofocus" type="email" name="email" id="email" ng-model="email" required>
  <input type="password" name="password" id="password" ng-model="password" required>
</form>
```
Let's look at the `loginForm.$error` object:
```javascript
// Note that, I ignored some values in the following objects

// If we input nothing for both fields
loginForm.$error = {
  "required": [{
    "$pristine": true,
    "$dirty": false,
    "$valid": false,
    "$invalid": true,
    "$name": "password",
    "$error": {
      "required": true
    }
  }, {
    "$viewValue": "",
    "$pristine": false,
    "$dirty": true,
    "$valid": false,
    "$invalid": true,
    "$name": "email",
    "$error": {
      "required": true,
      "email": false
    }
  }],
  "email": false
}

// If we input something but not a valid email in the email field
loginForm.$error = {
  "required": [{
    "$pristine": true,
    "$dirty": false,
    "$valid": false,
    "$invalid": true,
    "$name": "password",
    "$error": {
      "required": true
    }
  }],
  "email": [{
    "$viewValue": "invalid email",
    "$pristine": false,
    "$dirty": true,
    "$valid": false,
    "$invalid": true,
    "$name": "email",
    "$error": {
      "required": false,
      "email": true
    }
  }]
}

// If we input valid values for both
loginForm.$error = {
  "required": false,
  "email": false
}
```

### CSS classes applied on form fields by Angular

As you read the last section: `Control Variables in Forms`, it's easy to understand the classes:
```css
.ng-pristine {}
.ng-dirty {}
.ng-valid {}
.ng-invalid {}
```
Depend on status of input field, these classes will be applied to the field in real-time.

