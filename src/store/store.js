import { createStore } from "vuex";

export default createStore({
  state: { counter: 0, bonusCounter: 0, bonusMode: false },
  mutations: {
    INCREASE: (state) => {
      if (!state.bonusMode) {
        state.counter++;
      } else {
        state.bonusCounter++;
      }
    },
    DECREASE: (state) => {
      if (state.counter > 0) {
        state.counter--;
      }
      if (state.bonusCounter > 0) {
        state.bonusCounter--;
      }
    },
    CHANGEMODE: (state) => {
      state.bonusMode = !state.bonusMode;
    },
  },
});
