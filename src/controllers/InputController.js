import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import { Validate } from "../util/Validate.js";

export default class InputController {
  async inputNumber() {
    const input = await InputView.readNumber();
    new Validate().number(input);
    return input.split("").map((v) => parseInt(v));
  }

  async inputRestartExit() {
    const input = await InputView.readRestartExit();
    new Validate().restartExit(input);
    return parseInt(input);
  }
}
