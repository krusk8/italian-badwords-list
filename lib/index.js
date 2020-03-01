const leetMap =require('./leetMap');

function transformToLeet(string) {
  let finalString = "";
  for(var i = 0; i < string.length; i++) {
    if(leetMap[string[i].toLowerCase()]){
      finalString += leetMap[string[i].toLowerCase()];
    }else{
      finalString += string[i];
    }
  }
  return finalString;
}
let original='tested phrase';
let final = transformToLeet(original);
console.log('final',final)
module.exports = {
  array: require('./array'),
  regex: require('./regexp'),
  transformToLeet: transformToLeet
};
