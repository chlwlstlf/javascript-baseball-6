import { Console, Random } from "@woowacourse/mission-utils";
import constant from "../constants/constant.js";

export class BaseballGame {
  #randomNumber;
  #userNumber;
  #ball = 0;
  #strike = 0;

  constructor(randomNumber, userNumber) {
    this.#randomNumber = randomNumber;
    this.#userNumber = userNumber;
  }

  async gameplay() {
    for (let i = 0; i < constant.COUNT; i++) {
      if (this.#randomNumber[i] === this.#userNumber[i]) {
        this.#strike += 1;
      } else if (this.#randomNumber.includes(this.#userNumber[i])) {
        this.#ball += 1;
      }
    }

    let result = "";
    if (this.#ball) result += `${this.#ball}볼 `;
    if (this.#strike) result += `${this.#strike}스트라이크`;
    if (!this.#ball && !this.#strike) result = "낫싱";
    Console.print(result);

    if (this.#strike === 3) return true;
    else return false;
  }
}
