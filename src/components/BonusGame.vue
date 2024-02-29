<template>
  <div class="bonus-game">
    <router-link to="/round">
      <div
        class="button button-paper button-paper-bonus"
        @click="handleBtn('paper')"
      >
        <img src="../assets/images/icon-paper.svg" alt="paper-icon" />
      </div>
      <div
        class="button button-rock button-rock-bonus"
        @click="handleBtn('rock')"
      >
        <img src="../assets/images/icon-rock.svg" alt="rock-icon" />
      </div>
      <div
        class="button button-scissors button-scissors-bonus"
        @click="handleBtn('scissors')"
      >
        <img src="../assets/images/icon-scissors.svg" alt="scissors-icon" />
      </div>
      <div
        class="button button-lizard button-lizard-bonus"
        @click="handleBtn('lizard')"
      >
        <img src="../assets/images/icon-lizard.svg" alt="lizard-icon" />
      </div>
      <div
        class="button button-spock button-spock-bonus"
        @click="handleBtn('spock')"
      >
        <img src="../assets/images/icon-spock.svg" alt="spock-icon" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BonusGame",
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
