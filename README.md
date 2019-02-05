# vue-loading-button

> Straightforward Vue button component with slideout loading indicator

## Props

|Prop   |Type   |Default|Description                         |
|-------|-------|-------|------------------------------------|
|loading|boolean|false  |Controls loading indicator animation|
|styled |boolean|false  |Disables inessential default styles |

## Installation

Install the package from npm by running

```
$ npm i vue-loading-button
```

or

```
$ yarn add vue-loading-button
```

## Usage

Import, register and place the component in your Vue app.

```
<template>
  [...]
    <VueLoadingButton />
  [...]
</template>

<script>
import VueLoadingButton from 'vue-loading-button'

[...]
  components: {
    VueLoadingButton,
[...]
</script>
```

## Dev

Running example script requires @vue/cli and @vue/cli-service-global to be installed.
Install globally by running `npm i --g @vue/cli @vue/cli-service-global` or `yarn add global vue/cli @vue/cli-service-global`

## Accessibility

Apply attributes, such as aria-label, directly on the element to apply them to the button.

```
<template>
  [...]
    <VueLoadingButton aria-label='Send message' />
  [...]
</template>
```
