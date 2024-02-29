import { createRouter, createWebHistory } from "vue-router";
import OriginalGame from "../components/OriginalGame.vue";
import GameRound from "../components/GameRound.vue";
import BonusGame from "../components/BonusGame.vue";

const routes = [
  {
    path: "/",
    name: "OriginalGame",
    component: OriginalGame,
  },
  {
    path: "/round",
    name: "GameRound",
    component: GameRound,
  },
  {
    path: "/bonus",
    name: "BonusGame",
    component: BonusGame,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
