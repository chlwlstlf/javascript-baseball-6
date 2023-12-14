import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";
import errorMessage from "../constants/errorMessage.js";
import InputController from "./InputController.js";
import OutputView from "../views/OutputView.js";
import { CreateRandom } from "../models/createRandom.js";
import { BaseballGame } from "../models/BaseballGame.js";

export default class MainController {
  #randomNumber;
  #userNumber;
  #restartExit;

  async start() {
    OutputView.start();
    while (true) {
      this.#randomNumber = new CreateRandom().randomNumber;
      Console.print(this.#randomNumber);
      while (true) {
        this.#userNumber = await new InputController().inputNumber();
        if (await new BaseballGame(this.#randomNumber, this.#userNumber).gameplay()) {
          Console.print(gameMessage.OUTPUT.CORRECT);
          break;
        }
      }
      this.#restartExit = await new InputController().inputRestartExit();
      if (this.#restartExit === 2) {
        break;
      }
    }
  }
}
