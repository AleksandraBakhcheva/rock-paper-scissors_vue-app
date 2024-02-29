<template>
  <footer>
    <router-link to="/bonus" v-if="!$store.state.bonusMode">
      <button class="footer-button" @click="changeMode()">Бонус</button>
    </router-link>
    <router-link to="/" v-if="$store.state.bonusMode">
      <button class="footer-button" @click="changeMode()">Оригинал</button>
    </router-link>
    <button class="footer-button" @click="showRules()">Правила</button>
  </footer>
  <GameRules id="rules" />
</template>

<script>
import GameRules from "./GameRules.vue";
import { mapState } from "vuex";
import gsap from "gsap";

export default {
  name: "FooterComponent",
  components: {
    GameRules,
  },
  methods: {
    showRules() {
      if (screen.width > 670) {
        gsap.to("#rules", {
          duration: 0.5,
          y: "-75vh",
          ease: "power1",
          opacity: 1,
        });
      } else {
        gsap.to("#rules", {
          duration: 0.5,
          y: "-100vh",
          ease: "power1",
          opacity: 1,
        });
      }
    },

    changeMode() {
      this.$store.commit("CHANGEMODE");
      const headerTimeline = gsap.timeline();

      if (this.$store.state.bonusMode) {
        headerTimeline
          .to(".header", { duration: 0.3, y: "-30vh" })
          .to(".logo-original", { duration: 0, opacity: 0 })
          .to(".logo-bonus", { duration: 0, opacity: 1 }, "<0")
          .to(".original-score", { duration: 0, opacity: 0 }, "<0")
          .to(".bonus-score", { duration: 0, opacity: 1 }, "<0")
          .to(".header", { duration: 0.3, y: "0vh" });
      } else {
        headerTimeline
          .to(".header", { duration: 0.3, y: "-30vh" })
          .to(".logo-bonus", { duration: 0, opacity: 0 })
          .to(".logo-original", { duration: 0, opacity: 1 }, "<0")
          .to(".bonus-score", { duration: 0, opacity: 0 }, "<0")
          .to(".original-score", { duration: 0, opacity: 1 }, "<0")
          .to(".header", { duration: 0.3, y: "0vh" });
      }
    },

    modeCheck() {
      const headerTimeline = gsap.timeline();
      if (document.querySelector("bonus-game")) {
        headerTimeline
          .to(".logo-original", { duration: 0, opacity: 0 })
          .to(".logo-bonus", { duration: 0, opacity: 1 }, "<0")
          .to(".original-score", { duration: 0, opacity: 0 }, "<0")
          .to(".bonus-score", { duration: 0, opacity: 1 }, "<0")
          .to(".header", { duration: 0.3, y: "0vh" });

        this.$store.state.bonusMode = true;
      }
    },
  },
  computed: {
    ...mapState(["bonusMode"]),
  },

  mounted() {
    this.modeCheck();
  },
};
</script>

<style lang="scss">
@import "../assets/styles/Footer.scss";
</style>
