<script>
export default {
  name: "VueLoadingButton",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
  },
};
</script>

<template>
  <button
    :class="{
      'vue-loading-button': true,
      'loading': loading,
    }"
    type="button"
  >
    <slot>Submit</slot>
    <span class="spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<style scoped>
/* reset */
.vue-loading-button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
}
.vue-loading-button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
.vue-loading-button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/* styles */
.vue-loading-button {
  color: white;
  background-color: blue;
  border: solid 1px transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 14px;
  line-height: 28px;
  font-size: 20px;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  transition-timing-function: ease-in;
  overflow: hidden;
}
.vue-loading-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px lightblue,
    0 0 0 1.5px lightblue;
}
.vue-loading-button > .spinner {
  line-height: 1.15;
  position: absolute;
  top: 50%;
  left: auto;
  right: 1.2em;
  margin: -0.5em;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  transition-timing-function: ease-in;
}
.spinner span {
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  transition-timing-function: ease;
}
.spinner span:nth-child(1) {
  animation-delay: -0.45s;
}
.spinner span:nth-child(2) {
  animation-delay: -0.3s;
}
.spinner span:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  padding-right: 2.5em;
}
.loading .spinner span {
  opacity: 1;
}
</style>
