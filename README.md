# vue-loading-button

> Straightforward Vue button with slideout loading indicator

<p align="left">
  <img width="200" src="https://user-images.githubusercontent.com/38357771/52435345-9fe26a00-2adf-11e9-832e-497ffa480d05.gif" alt="Example use">
</p>

[![try it on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4zywwyjxw7)

## Props

| Prop    | Type    | Required | Default | Description                          |
| ------- | ------- | -------- | ------- | ------------------------------------ |
| loading | boolean | false    | false   | Controls loading indicator animation |
| styled  | boolean | false    | false   | Enables opinionated sample styles    |

## Installation

Install the package from npm by running:

```
$ npm i vue-loading-button
```

or

```
$ yarn add vue-loading-button
```

## Usage

Import, register and place the component in your Vue app.

```html
<template>
  <VueLoadingButton />
</template>
```

```js
import VueLoadingButton from 'vue-loading-button';

export default {
  components: {
    VueLoadingButton,
  },
};
```

## Accessibility

Apply attributes, such as aria-label, directly on the element to apply them to the button.

```html
<template>
  <VueLoadingButton aria-label='Send message' />
</template>
```

## Dev

Running example script requires @vue/cli and @vue/cli-service-global to be installed.
Install globally by running `npm i --g @vue/cli @vue/cli-service-global` or `yarn add global vue/cli @vue/cli-service-global`.

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/vue-loading-button/issues). If you wish to work on this project:

1.  [Fork the project](https://github.com/shwilliam/vue-loading-button/archive/master.zip)
2.  Create your feature branch (`git checkout -b new-feature-branch`)
3.  Commit your changes (`git commit -am 'add new feature'`)
4.  Push to the branch (`git push origin new-feature-branch`)
5.  [Submit a pull request!](https://github.com/shwilliam/vue-loading-button/pull/new/master)
