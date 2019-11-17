const getCurrentCombination = store => {
  const sorted = [];
  for (let i = 1; i < store.state.correctCombination.length + 1; i++) {
    sorted.push(store.getters.currentCombination(i));
  }
  return sorted;
};

export const retrieveData = store => {
  return {
    currentCombination: getCurrentCombination(store),
    correctCombination: store.state.correctCombination
  };
};

export const getCorrect = data => {
  let correct = 0;
  for (const [index, color] of data.currentCombination.entries()) {
    if (data.correctCombination[index] === color) {
      correct += 1;
    }
  }
  return correct;
};

const getAllHits = data => {
  let wrongPosition = 0;
  let tempCorrect = [...data.correctCombination];
  for (const color of data.currentCombination.values()) {
    if (tempCorrect.includes(color)) {
      wrongPosition += 1;
      const correctColorIndex = tempCorrect.indexOf(color);
      tempCorrect[correctColorIndex] = "x";
    }
  }
  return wrongPosition;
};

export const getResult = data => {
  const correct = getCorrect(data);
  const wrongPosition = getAllHits(data) - correct;

  return {
    wrongPosition: wrongPosition,
    correct: correct
  };
};
