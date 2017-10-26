export function notificacao(state = "", action) {
  if (action.type === "NOTIFICACAO") {
    return action.msg;
  }

  return state;
}
