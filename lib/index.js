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

module.exports = {
  array: require('./array'),
  regex: require('./regexp'),
  transformToLeet: transformToLeet
};
