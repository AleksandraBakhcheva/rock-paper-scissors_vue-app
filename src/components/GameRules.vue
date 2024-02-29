<template>
  <div class="rules-box">
    <div class="rules-box-title">
      <h2>Правила</h2>
      <img
        src="../assets/images/icon-close.svg"
        alt="close-button"
        @click="hideRules()"
      />
    </div>
    <img
      class="rules-box-rules"
      src="../assets/images/image-rules.svg"
      alt="Rules"
      v-if="!$store.state.bonusMode"
    />
    <img
      class="rules-box-rules"
      src="../assets/images/image-rules-bonus.svg"
      alt="Rules"
      v-if="$store.state.bonusMode"
    />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "GameRules",
  methods: {
    hideRules() {
      gsap.to("#rules", { duration: 1, y: "0px", ease: "power1", opacity: 0 });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/GameRules.scss";
</style>
