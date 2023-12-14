const errorMessage = Object.freeze({
  NOT_NULL: "[ERROR] 필수로 입력해주세요.\n",
  ONLY_NUMBER: "[ERROR] 숫자만 입력해주세요.\n",
  NOT_SPACE: "[ERROR] 중간에 띄어쓰기를 빼고 입력해주세요.\n",
  OUT_OF_RANGE: "[ERROR] 1에서 9 사이의 숫자만 입력해주세요.\n",
  THREE_NUMBERS: "[ERROR] 숫자 3개가 입력되었는 지 확인해주세요.\n",
  NOT_DUPLICATE: "[ERROR] 입력한 숫자는 중복되면 안 됩니다.\n",
  ONE_OR_TWO: "[ERROR] 1 또는 2만 입력해주세요.\n",
});
export default errorMessage;
