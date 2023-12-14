import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const InputView = {
  async readNumber() {
    const input = await Console.readLineAsync(gameMessage.INPUT.NUMBER);
    return input;
  },
  async readRestartExit() {
    const input = await Console.readLineAsync(gameMessage.INPUT.RESTART_EXIT);
    return input;
  },
};

export default InputView;
