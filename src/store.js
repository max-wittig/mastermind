import Vue from "vue";
import Vuex from "vuex";
import { NUMBER_OF_ROWS, COLORS, NUMBER_OF_CELLS } from "./constants";

Vue.use(Vuex);

const generateCombination = () => {
  const combination = [];
  for (let i = 0; i < NUMBER_OF_CELLS; i++) {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    combination.push(COLORS[randomIndex]);
  }
  return combination;
};

export const store = new Vuex.Store({
  state: {
    selectedColor: "",
    currentRow: NUMBER_OF_ROWS,
    correctCombination: [],
    currentCombination: [], // [12: {1: "blue", 2: "red",...}]
    results: {},
    gameOver: false,
    game: 0
  },
  mutations: {
    SET_SELECTED_COLOR(state, color) {
      state.selectedColor = color;
    },
    NEXT_TURN(state, result) {
      Vue.set(state.results, state.currentRow, result);
      state.currentRow -= 1;
      state.currentCombination = {};
    },
    SET_CURRENT_COMBINATION(state, payload) {
      const cell = payload.cell;
      const selectedColor = payload.selectedColor;
      if (!state.currentCombination[state.currentRow]) {
        Vue.set(state.currentCombination, state.currentRow, {});
      }
      Vue.set(state.currentCombination[state.currentRow], cell, selectedColor);
    },
    RESET_GAME(state) {
      state.currentRow = NUMBER_OF_ROWS;
      state.correctCombination = generateCombination();
      state.results = {};
      state.gameOver = false;
      state.game += 1;
    }
  },
  getters: {
    rowFinished: state => {
      if (!state.currentCombination[state.currentRow]) {
        return false;
      }
      if (
        Object.keys(state.currentCombination[state.currentRow]).length <
        NUMBER_OF_CELLS
      ) {
        return false;
      }
      return true;
    },
    currentCombination: state => cellNumber => {
      return state.currentCombination[state.currentRow][cellNumber];
    }
  },
  actions: {}
});
