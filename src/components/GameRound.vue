<template>
  <div class="game-round">
    <div id="your-choice" class="game-round-your-choice">
      <h4>Вы выбрали</h4>
      <div class="game-round-your-choices">
        <div
          class="button button-paper your-btn-chosen"
          v-if="yourSelection == 'paper'"
        >
          <img src="../assets/images/icon-paper.svg" alt="paper-icon" />
        </div>
        <div
          class="button button-rock your-btn-chosen"
          v-if="yourSelection == 'rock'"
        >
          <img src="../assets/images/icon-rock.svg" alt="rock-icon" />
        </div>
        <div
          class="button button-scissors your-btn-chosen"
          v-if="yourSelection == 'scissors'"
        >
          <img src="../assets/images/icon-scissors.svg" alt="scissors-icon" />
        </div>
        <div
          class="button button-lizard button-lizard-bonus your-btn-chosen"
          v-if="yourSelection == 'lizard'"
        >
          <img src="../assets/images/icon-lizard.svg" alt="lizard-icon" />
        </div>
        <div
          class="button button-spock button-spock-bonus your-btn-chosen"
          v-if="yourSelection == 'spock'"
        >
          <img src="../assets/images/icon-spock.svg" alt="spock-icon" />
        </div>
        <div class="win-circles" v-if="youWin">
          <div class="circle-1">
            <div class="circle-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="game-result">
      <span v-if="result && result != null">
        <h1>{{ result }}</h1>
        <router-link to="/" v-if="!this.$store.state.bonusMode">
          <button>Играть снова</button>
        </router-link>
        <router-link to="/bonus" v-if="this.$store.state.bonusMode">
          <button>Играть снова</button>
        </router-link>
      </span>
    </div>
    <div id="computer-choice" class="game-round-computer-choice">
      <h4>
        Компьютер <br />
        выбрал
      </h4>
      <div class="game-round-computer-choices">
        <div
          class="button button-paper computer-btn-chosen"
          v-if="computerSelection == 'paper'"
        >
          <img src="../assets/images/icon-paper.svg" alt="paper-icon" />
        </div>
        <div
          class="button button-rock computer-btn-chosen"
          v-if="computerSelection == 'rock'"
        >
          <img src="../assets/images/icon-rock.svg" alt="rock-icon" />
        </div>
        <div
          class="button button-scissors computer-btn-chosen"
          v-if="computerSelection == 'scissors'"
        >
          <img src="../assets/images/icon-scissors.svg" alt="scissors-icon" />
        </div>
        <div
          class="button button-lizard button-lizard-bonus computer-btn-chosen"
          v-if="computerSelection == 'lizard'"
        >
          <img src="../assets/images/icon-lizard.svg" alt="lizard-icon" />
        </div>
        <div
          class="button button-spock button-spock-bonus computer-btn-chosen"
          v-if="computerSelection == 'spock'"
        >
          <img src="../assets/images/icon-spock.svg" alt="spock-icon" />
        </div>
        <div class="lose-circles" v-if="youLose">
          <div class="circle-1">
            <div class="circle-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";

export default {
  name: "GameRound",
  props: ["itemSelected"],
  data() {
    return {
      yourSelection: this.itemSelected,
      computerSelection: null,
      result: null,
      youWin: true,
      youLose: true,
    };
  },
  methods: {
    computerSelector(min, max) {
      let computerChoice = Math.round(Math.random() * (max - min) + min);
      if (computerChoice == 1) {
        computerChoice = "paper";
      } else if (computerChoice == 2) {
        computerChoice = "rock";
      } else if (computerChoice == 3) {
        computerChoice = "scissors";
      } else if (computerChoice == 4) {
        computerChoice = "lizard";
      } else if (computerChoice == 5) {
        computerChoice = "spock";
      }
      this.computerSelection = computerChoice;
    },

    whoWinOriginal(you, computer) {
      if (you == computer) {
        this.result = "Ничья";
        this.youWin = false;
        this.youLose = false;
      } else if (you == null) {
        this.result = "Ошибка";
        this.youWin = false;
        this.youLose = false;
      } else if (
        (you == "paper" && computer == "rock") ||
        (you == "rock" && computer == "scissors") ||
        (you == "scissors" && computer == "paper")
      ) {
        this.result = "Вы выиграли";
        this.$store.commit("INCREASE");
        this.youLose = false;
        this.youWin = true;
      } else {
        this.result = "Вы проиграли";
        this.$store.commit("DECREASE");
        this.youWin = false;
        this.youLose = true;
      }
      console.log(this.youWin, this.youLose);
    },

    whoWinBonus(you, computer) {
      if (you == computer) {
        this.result = "Ничья";
        this.youWin = false;
        this.youLose = false;
      } else if (you == null) {
        this.result = "Ошибка";
        this.youWin = false;
        this.youLose = false;
      } else if (
        (you == "scissors" && computer == "paper") ||
        (you == "scissors" && computer == "lizard") ||
        (you == "paper" && computer == "rock") ||
        (you == "paper" && computer == "spock") ||
        (you == "rock" && computer == "lizard") ||
        (you == "rock" && computer == "scissors") ||
        (you == "lizard" && computer == "spock") ||
        (you == "lizard" && computer == "paper") ||
        (you == "spock" && computer == "scissors") ||
        (you == "spock" && computer == "rock")
      ) {
        this.result = "Вы выиграли";
        this.$store.commit("INCREASE");
        this.youLose = false;
        this.youWin = true;
      } else {
        this.result = "Вы проиграли";
        this.$store.commit("DECREASE");
        this.youWin = false;
        this.youLose = true;
      }
    },

    roundAnimations() {
      const roundTimeline = gsap.timeline({ defaults: { duration: 1 } });

      if (screen.width > 670) {
        roundTimeline
          .to("#your-choice", { x: "-10vw", delay: 1.5, ease: "elastic" })
          .to("#computer-choice", { x: "10vw", delay: 1.5, ease: "elastic" }, 0)
          .to(".win-circles", { opacity: 1, scale: 3, ease: "back" }, "<0")
          .to(".lose-circles", { opacity: 1, scale: 3, ease: "back" }, "<0")
          .from(".game-result", { opacity: 0, ease: "circ" }, "<.3");
      } else {
        roundTimeline
          .to("#your-choice", { scale: 1.1, delay: 1.5, ease: "elastic" })
          .to(
            "#computer-choice",
            { scale: 1.1, delay: 1.5, ease: "elastic" },
            0
          )
          .to(".win-circles", { opacity: 1, scale: 3, ease: "back" }, "<0")
          .to(".lose-circles", { opacity: 1, scale: 3, ease: "back" }, "<0")
          .from(".game-result", { opacity: 0, ease: "circ" }, "<.3");
      }
    },
  },
  computed: {
    ...mapState(["counter"]),
  },
  mounted() {
    if (!this.$store.state.bonusMode) {
      setTimeout(() => {
        this.computerSelector(1, 3);
      }, 1400);
      setTimeout(() => {
        this.whoWinOriginal(this.yourSelection, this.computerSelection);
      }, 1600);
    } else {
      setTimeout(() => {
        this.computerSelector(1, 5);
      }, 1400);
      setTimeout(() => {
        this.whoWinBonus(this.yourSelection, this.computerSelection);
      }, 1600);
    }
    this.roundAnimations();
  },
};
</script>

<style lang="scss">
@import "../assets/styles/GameRound.scss";
@import "../assets/styles/Games.scss";
</style>
