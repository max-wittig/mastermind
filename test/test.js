import { getResult } from "../src/gamelogic";
import { expect } from "chai";

describe("Result different colors", () => {
  const correctResult = ["red", "green", "blue", "orange"];

  it("One correct result", () => {
    const currentResult = ["red", "red", "red", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 1, "wrongPosition": 0});
  });

  it("Zero correct results", () => {
    const currentResult = ["pink", "pink", "pink", "pink"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 0});
  });

  it("Four correct results", () => {
    const currentResult = ["red", "green", "blue", "orange"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 4, "wrongPosition": 0});
  });

  it("Two on the wrong position (swapped)", () => {
    // ["red", "green", "blue", "orange"];
    const currentResult = ["green", "red", "blue", "orange"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 2, "wrongPosition": 2});
  });

  it("Three green and red on wrong position", () => {
    const currentResult = ["green", "green", "green", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 1, "wrongPosition": 1});
  });
});

describe("Result same color", () => {
  const correctResult = ["red", "red", "red", "red"];

  it("One correct result", () => {
    const currentResult = ["blue", "blue", "blue", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 1, "wrongPosition": 0});
  });

  it("Zero correct results", () => {
    const currentResult = ["pink", "pink", "pink", "pink"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 0});
  });

  it("Four correct results", () => {
    const currentResult = ["red", "red", "red", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 4, "wrongPosition": 0});
  });

  it("Three green and two red", () => {
    const currentResult = ["red", "green", "green", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 2, "wrongPosition": 0});
  });
});

describe("Result two colors", () => {
  const correctResult = ["green", "red", "green", "red"];

  it("One correct result", () => {
    const currentResult = ["blue", "red", "blue", "white"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 1, "wrongPosition": 0});
  });

  it("Zero correct results", () => {
    const currentResult = ["pink", "pink", "pink", "pink"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 0});
  });

  it("Four correct results", () => {
    const currentResult = ["green", "red", "green", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 4, "wrongPosition": 0});
  });

  it("Four on wrong position", () => {
    const currentResult = ["red", "green", "red", "green"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 4});
  });
});

describe("Result another scenario", () => {
  const correctResult = ["yellow", "green", "blue", "green"];

  it("One correct result", () => {
    const currentResult = ["yellow", "red", "red", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 1, "wrongPosition": 0});
  });

  it("Zero correct results", () => {
    const currentResult = ["pink", "pink", "pink", "pink"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 0});
  });

  it("Four correct results", () => {
    const currentResult = ["yellow", "green", "blue", "green"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 4, "wrongPosition": 0});
  });

  it("Four on wrong position", () => {
    // ["yellow", "green", "blue", "green"];
    const currentResult = ["green", "blue", "green", "yellow"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 4});
  });

  it("Two on wrong position", () => {
    const currentResult = ["blue", "blue", "yellow", "blue"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 0, "wrongPosition": 2});
  });
});

describe("Another wrong case", () => {
  const correctResult = ["green", "red", "red", "orange"];

  it("Two on wrong position", () => {
    const currentResult = ["red", "red", "red", "red"];
    const data = {
      currentCombination: currentResult,
      correctCombination: correctResult
    };
    const result = getResult(data);
    expect(result).to.deep.include({"correct": 2, "wrongPosition": 0});
  });
});
