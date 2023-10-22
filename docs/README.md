# 🎯 기능 명세서

1\. 랜덤 3자리 수 만들기

- 1~9 숫자이고, 3개 모두 다른 숫자여야 한다.

2\. 숫자 입력

- `Console.readLineAsync` 사용한다.
- 3자리 수가 아닐 때, 숫자가 아닐 때 예외처리 해준다 → throw문으로 예외 발생 후 종료시킨다.
- 에러 문구는 “[ERROR]“로 시작해야 한다.

3\. 볼과 스트라이크 개수

- `Console.print` 사용한다.
- 볼이 먼저 출력되어야 한다.
- 정답일 때, 3 스크라이크 출력 후 맞혔다는 문구를 출력한다.

4\. 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

- 1을 입력하면 게임을 다시 시작하고, 2를 입력하면 게임을 종료한다.
- 잘못된 숫자를 입력했을 때, 에러 문구는 “[ERROR]“로 시작해야 한다.