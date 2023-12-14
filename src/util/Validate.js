import errorMessage from "../constants/errorMessage.js";
import constant from "../constants/constant.js";

export class Validate {
  number(input) {
    this.notNull(input);
    const splitedValue = input.split("");
    splitedValue.forEach((value) => {
      this.onlyNumber(value);
      this.notSpace(value);
      this.outOfRange(value);
    });
    this.threeNumbers(splitedValue);
    this.notDuplicate(splitedValue);
  }
  restartExit(input) {
    this.notNull(input);
    this.onlyNumber(input);
    this.notSpace(input);
    this.oneOrTwo(input);
  }

  notNull(input) {
    if (!input.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  }
  onlyNumber(input) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(input)) {
      throw new Error(errorMessage.ONLY_NUMBER);
    }
  }
  notSpace(input) {
    if (input.includes(" ")) {
      throw new Error(errorMessage.NOT_SPACE);
    }
  }
  threeNumbers(input) {
    if (input.length !== constant.COUNT) {
      throw new Error(errorMessage.THREE_NUMBERS);
    }
  }
  notDuplicate(input) {
    if (new Set(input).size !== constant.COUNT) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  }
  outOfRange(input) {
    if (!(Number(input) >= constant.MINIMUM && Number(input) <= constant.MAXIMUM)) {
      throw new Error(errorMessage.OUT_OF_RANGE);
    }
  }
  oneOrTwo(input) {
    if (Number(input) !== constant.RESTART && Number(input) !== constant.EXIT) {
      throw new Error(errorMessage.ONE_OR_TWO);
    }
  }
}
