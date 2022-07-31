// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// const brackets = [{'(':')'}, {'[':']'}, {'{':'}'}, {'|':'|'}, {'1':'2'}, {'3':'4'}, {'5':'6'}, {'7':'7'}, {'8':'8'}];
const brackets = {
  '(':')',
  '[':']',
  '{':'}',
  '|':'|',
  '1':'2',
  '3':'4',
  '5':'6',
  '7':'7',
  '8':'8'
};


function check(str) {
  // console.log(str);
  const steck = [];
  let correct = true;

  for (let i = 0; i < str.length; i++){
    // console.log(brackets.hasOwnProperty(str[i]));
    if (brackets.hasOwnProperty(str[i])){
      steck.push(str[0]);
      continue;
    } 
    
    if (steck.length === 0) {
      correct = false;
      break;
    }

    // console.log(brackets[steck[steck.length-1]]);
    if (str[i] == brackets[steck[steck.length-1]]) {
      steck.pop();
      continue;
    }

  }

  if (steck.length > 0){
    correct = false;
  }

  return correct;
}

let str = '5555512575557777777555566667888888667661133833448441111222233333444442266666';
console.log(check(str)) ;
