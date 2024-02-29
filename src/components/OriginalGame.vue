<template>
  <div class="original-game">
    <router-link to="/round">
      <div class="button button-paper" @click="handleBtn('paper')">
        <img src="../assets/images/icon-paper.svg" alt="paper-icon" />
      </div>
      <div class="button button-rock" @click="handleBtn('rock')">
        <img src="../assets/images/icon-rock.svg" alt="rock-icon" />
      </div>
      <div class="button button-scissors" @click="handleBtn('scissors')">
        <img src="../assets/images/icon-scissors.svg" alt="scissors-icon" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OriginalGame",
  data() {
    return {
      item: null,
    };
  },
  methods: {
    handleBtn(item) {
      this.item = item;
      this.$emit("item", this.item);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/Games.scss";
</style>
