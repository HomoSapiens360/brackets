module.exports = function check(str, bracketsConfig) {
  if (str.length > 1 && str.length % 2 === 0) {

    // находим в строке нужную нам комбинацию строк и находим индекс
    // изымаем из строки найденную комбинацию и продолжаем поиск снова

    for (const conf of bracketsConfig) {
      const pair = conf[0] + conf[1];
      const bracketsIndex = str.indexOf(pair);
      if (bracketsIndex > 0) {
        const leftPart = str.substring(0, bracketsIndex);
        const rightPart = str.substring(bracketsIndex + 2);
        return true && check(leftPart + rightPart, bracketsConfig);
      }
      if (bracketsIndex === 0) {
        if (str.length === 2) {
          return true;
        } else {
          return true && check(str.substring(bracketsIndex + 2), bracketsConfig);;
        }
      }
    }
  }
  return false;
}
