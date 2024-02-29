<template>
  <header class="header">
    <div class="header-logo">
      <img
        class="logo-original"
        src="../assets/images/logo.svg"
        alt="rock-paper-scissors"
      />
      <img
        class="logo-bonus"
        src="../assets/images/logo-bonus.svg"
        alt="rock-paper-scissors-lizard-spock"
      />
    </div>
    <div class="header-score">
      <span class="header-score-text">Счет</span>
      <span class="header-score-counter original-score">{{
        $store.state.counter
      }}</span>
      <span class="header-score-counter bonus-score">{{
        $store.state.bonusCounter
      }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss">
@import "../assets/styles/Header.scss";
</style>
