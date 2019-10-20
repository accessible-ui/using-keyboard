[![bundlephobia](https://img.shields.io/bundlephobia/minzip/@accessible/using-keyboard?style=plastic)](https://bundlephobia.com/result?p=@accessible/using-keyboard)
[![codecov](https://codecov.io/gh/jaredLunde/accessible-using-keyboard/branch/master/graph/badge.svg)](https://codecov.io/gh/jaredLunde/accessible-using-keyboard)
[![Build Status](https://travis-ci.org/jaredLunde/accessible-using-keyboard.svg?branch=master)](https://travis-ci.org/jaredLunde/accessible-using-keyboard)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://jaredlunde.mit-license.org/)

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
  <UsingKeyboard className='using-keyboard'>
    <div className='my-app'>
      // rest of the app
    </div>
  </UsingKeyboard>
)
```

### `useUsingKeyboard(defaultUsingKeyboard?: bool): bool`

A React hook that returns `true` when the keyboard was used more recently than the mouse for
focusing an element.

| Prop                 | Type   | Required | Default | Description                             |
| -------------------- | ------ | -------- | ------- | --------------------------------------- |
| defaultUsingKeyboard | `bool` | `false`  | `false` | Sets the default value of usingKeyboard |

### `<BodyUsingKeyboard />`

A React component that adds a `using-keyboard` class to the `<body>` when the keyboard was used more recently
than the mouse for focusing an element. It removes the class each time a `mousedown` event fires.

| Prop                 | Type            | Required | Default          | Description                                                                            |
| -------------------- | --------------- | -------- | ---------------- | -------------------------------------------------------------------------------------- |
| className            | `string`        | `false`  | `using-keyboard` | This is the class name that gets appended to the body                                  |
| defaultUsingKeyboard | `bool`          | `false`  | `false`          | Sets the default value of usingKeyboard                                                |
| children             | `React.Element` | `false`  | `null`           | By default this renders no children, but it will render any children you provide here. |

### `<UsingKeyboard />`

A React component that adds a `using-keyboard` class to its child element when the keyboard was used more recently
than the mouse for focusing an element. It removes the class each time a `mousedown` event fires.

| Prop                 | Type            | Required | Default          | Description                                                                            |
| -------------------- | --------------- | -------- | ---------------- | -------------------------------------------------------------------------------------- |
| className            | `string`        | `false`  | `using-keyboard` | This is the class name that gets appended to the child element                         |
| defaultUsingKeyboard | `bool`          | `false`  | `false`          | Sets the default value of usingKeyboard                                                |
| children             | `React.Element` | `false`  | `null`           | By default this renders no children, but it will render any children you provide here. |

## LICENSE

MIT
