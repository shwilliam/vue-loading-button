<template>
  <div class="example">
    <VueLoadingButton class="button" @click.native="handleClick" :loading="isLoading" />
  </div>
</template>

<script>
import VueLoadingButton from "../src/vue-loading-button.vue";
export default {
  name: "Example",
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleClick() {
      console.log('click') /* eslint-disable-line */
      this.isLoading = !this.isLoading
    },
  },
  components: {
    VueLoadingButton
  }
};
</script>

<style scoped>
.example {
  font-family: sans-serif;
}
.button {
  background-color: coral;
}
</style>
