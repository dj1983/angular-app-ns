# Form Validation

* [Validation options](#validation-options)
* [Control Variables in Forms](#control-variables-in-forms)
* [Custom validation](#custom-validation)

## Validation options

Example HTML code:
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

## Control Variables in Forms

We could control the form status in real-time by the following variables:
( Common format: formName.inputFieldName.property )

| Form Status      | Angular Syntax                      | Returns                                                           |
| ---------------- | ------------------------------------|------------------------------------------------------------------ |
| Unmodified form? | `formName.inputFieldName.$pristine` | `true`: if user hasn't touched the form  `false`: if they have    |
| Modified form?   | `formName.inputFieldName.$dirty`    | `true`: if user has modified the form  `false`: if they haven't   |
| Valid form?      | `formName.inputFieldName.$valid`    | `true`: for valid  `false`: for invalid                           |
| Invalid form?    | `formName.inputFieldName.$invalid`  | `true`: for invalid  `false`: for valid                           |
| Errors           | `formName.inputFieldName.$error`    | This object contains all of the validations on a particular form. |

### One more word on `formName.inputFieldName.$error`

For example, we have the HTML code like this:
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

## CSS classes applied on form fields by Angular

As you read the last section: `Control Variables in Forms`, it's easy to understand the classes:
```css
.ng-pristine {}
.ng-dirty {}
.ng-valid {}
.ng-invalid {}
```
Depend on status of input field, these classes will be applied to the field in real-time.
