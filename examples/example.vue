<template>
  <div class="example">
    <p>
      Click button to trigger loading simulation,
      click
      <button type="button" @click="isStyled = !isStyled">here</button>
      to
      {{
      isStyled ?
      'unstyle' :
      'style'
      }}
    </p>
    <VueLoadingButton
      aria-label="Post message"
      class="button"
      @click.native="handleClick"
      :loading="isLoading"
      :styled="isStyled"
    >Send</VueLoadingButton>
  </div>
</template>

<script>
import VueLoadingButton from "../src/vue-loading-button.vue";
export default {
  name: "Example",
  data() {
    return {
      isLoading: false,
      isStyled: false
    };
  },
  methods: {
    handleClick() {
      console.log("click"); /* eslint-disable-line */
      this.isLoading = true;
      setTimeout(() => (this.isLoading = false), 1300);
    }
  },
  components: {
    VueLoadingButton
  }
};
</script>

<style scoped>
.example {
  font-family: sans-serif;
  text-align: center;
}
/* .button {
  background-color: coral;
  border-radius: 3px;
} */
</style>
