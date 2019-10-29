<hr>
<div align="center">
  <h1 align="center">
    @accessible/using-keyboard
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/using-keyboard">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/using-keyboard?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/accessible-using-keyboard">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/accessible-using-keyboard?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/jaredLunde/accessible-using-keyboard">
    <img alt="Build status" src="https://img.shields.io/travis/jaredLunde/accessible-using-keyboard?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/using-keyboard">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/using-keyboard?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/using-keyboard?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">
  npm i @accessible/using-keyboard
</pre>
<hr>

React utilities for adding accessible focus styles to elements when someone is using keyboard navigation

## Quick Start

```jsx harmony
import UsingKeyboard, {
  BodyUsingKeyboard,
  useUsingKeyboard,
} from '@accessibile/using-keyboard'

const App = props => (
  <UsingKeyboard className="using-keyboard">
    <div className="my-app">
      // This will have the class name 'my-app using-keyboard' 
      // when a keyboard drew the last focus in a document. 
      // That is, during keyboard navigation
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
