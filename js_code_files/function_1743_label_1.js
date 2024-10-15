function escapeArgForInterpolation(arg) {
  return arg
    .replace(/[\0\u0008\u001B\u009B]/gu, "")
    .replace(/\r?\n|\r/gu, " ")
    .replace(/\^/gu, "^^")
    .replace(/(["&<>|])/gu, "^$1");
}