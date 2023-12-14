import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const OutputView = {
  start() {
    Console.print(gameMessage.OUTPUT.START);
  },

  correct() {
    Console.print(gameMessage.OUTPUT.CORRECT);
  },
};

export default OutputView;
