[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@accessible/using-keyboard?style=for-the-badge)](https://bundlephobia.com/result?p=@accessible/using-keyboard)
[![Code coverage](https://img.shields.io/codecov/c/gh/jaredLunde/accessible-using-keyboard?style=for-the-badge)](https://codecov.io/gh/jaredLunde/accessible-using-keyboard)
[![Build status](https://img.shields.io/travis/jaredLunde/accessible-using-keyboard?style=for-the-badge)](https://travis-ci.org/jaredLunde/accessible-using-keyboard)
[![License](https://img.shields.io/github/license/jaredLunde/accessible-using-keyboard?style=for-the-badge)](https://jaredlunde.mit-license.org/)

---

# @accessible/using-keyboard

React utilities for adding accessible focus styles to elements when someone is using keyboard navigation

## Installation

#### `npm i @accessible/using-keyboard`

#### `yarn add @accessible/using-keyboard`

## Usage

```jsx harmony
import UsingKeyboard, {
  BodyUsingKeyboard,
  useUsingKeyboard,
} from '@accessibile/using-keyboard'

const App = props => (
  <UsingKeyboard className="using-keyboard">
    <div className="my-app">
      // This will have the class name 'using-keyboard' // when a keyboard drew
      the last focus in a document. // This is, during keyboard navigation
    </div>
  </UsingKeyboard>
)
```

### `useUsingKeyboard(defaultUsingKeyboard?: bool): bool`

A React hook that returns `true` when the keyboard was used more recently than the mouse for
focusing an element.

| Argument             | Type   | Required | Default | Description                             |
| -------------------- | ------ | -------- | ------- | --------------------------------------- |
| defaultUsingKeyboard | `bool` | `false`  | `false` | Sets the default value of usingKeyboard |

### `<BodyUsingKeyboard />`

A React component that adds a `using-keyboard` class to the `<body>` when the keyboard was used more recently
than the mouse for focusing an element. It removes the class each time a `mousedown` event fires.

| Prop                 | Type            | Required | Default            | Description                                                                            |
| -------------------- | --------------- | -------- | ------------------ | -------------------------------------------------------------------------------------- |
| className            | `string`        | `false`  | `"using-keyboard"` | This is the class name that gets appended to the body                                  |
| defaultUsingKeyboard | `bool`          | `false`  | `false`            | Sets the default value of usingKeyboard                                                |
| children             | `React.Element` | `false`  | `null`             | By default this renders no children, but it will render any children you provide here. |

### `<UsingKeyboard />`

A React component that adds a `using-keyboard` class to its child element when the keyboard was used more recently
than the mouse for focusing an element. It removes the class each time a `mousedown` event fires.

| Prop                 | Type            | Required | Default            | Description                                                                            |
| -------------------- | --------------- | -------- | ------------------ | -------------------------------------------------------------------------------------- |
| className            | `string`        | `false`  | `"using-keyboard"` | This is the class name that gets appended to the child element                         |
| defaultUsingKeyboard | `bool`          | `false`  | `false`            | Sets the default value of usingKeyboard                                                |
| children             | `React.Element` | `false`  | `null`             | By default this renders no children, but it will render any children you provide here. |

## LICENSE

MIT
