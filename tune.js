function tune(arr){
  const arr_hz = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41]
  let res = []
  for(let i = 0;i < 6; ++i ){
     res.push(tune_out(arr_hz[i], arr[i]))
  }
  return res;
}

function tune_out(expect_value, real_value){
  let res;
  let percent = (real_value / expect_value) * 100;
  if  (percent === 0) res = '-';
  else if (percent <= 97) res = '>>•';
  else if (percent < 100) res = '>•';
  else if (percent === 100) res = 'OK';
  else if (percent < 103) res = '•<';
  else res = '•<<';
  return res;
}

//console.log(tune([0, 246.94, 0, 0, 0, 78])); // [" - ", "OK", " - ", " - ", " - ", ">>•"]
//console.log(tune([329.63, 246.94, 195, 146, 111, 82.41])) // ["OK", "OK", ">•", ">•", "•<", "OK" ]
//console.log(tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41])) //["OK", "OK", "OK", "OK", "OK", "OK"]