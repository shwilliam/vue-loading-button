<template>
  <div class="example">
    <VueLoadingButton class="button" />
  </div>
</template>

<script>
import VueLoadingButton from "../src/vue-loading-button.vue";
export default {
  name: "Example",
  data() {
    return {};
  },
  components: {
    VueLoadingButton
  }
};
</script>

<style scoped>
.example {}
.button {}
</style>
