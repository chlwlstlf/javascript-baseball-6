import { Random } from "@woowacourse/mission-utils";
import constant from "../constants/constant.js";

export class CreateRandom {
  constructor() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = computer;
  }
}
