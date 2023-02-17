module.exports = function check(str, bracketsConfig) {
  let stec = [];
  stec.push(str[0]);
  
  for (let i in bracketsConfig) {
    if ((stec === bracketsConfig[i][1] && bracketsConfig[i][1] !== bracketsConfig[i][0]) || str.length % 2 !== 0 ) {
      return false;
    }
  }

  for (let i = 1; i < str.length; i++) {
    for (let j in bracketsConfig) {
      var ind = bracketsConfig[j].indexOf(str[i]);
      if (ind !== -1) {
        ind = ind;
        break;
      }
    }

    if (ind === 0) {
      let che = stec[stec.length - 1];
      let k = 0;
      
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] === che && bracketsConfig[j][1] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][0]) {
          stec.pop();
          k++;
        }
      }
      
      if (k === 0) {
        stec.push(str[i]);
      }

    } else if (ind === 1) {
      let ch = stec[stec.length - 1];
      
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j].indexOf(str[i]) === 1 && bracketsConfig[j].indexOf(ch) === 0 ) {
          stec.pop();
          j = bracketsConfig.length;
        }
      }
    }
  }

  if (stec.length === 0) {
    return true;
  } else {
    return false;
  }
}
