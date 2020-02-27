String.prototype.replaceAll = function(str1, str2, ignore) {
  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

let origin_array= require('./array');

//Next improvment mix all cases
let enrichment_0= origin_array.map(item => item.replaceAll('o','0'));
let enrichment_1= origin_array.map(item => item.replaceAll('i','1'));
let enrichment_3= origin_array.map(item => item.replaceAll('e','3'));
let enrichment_4= origin_array.map(item => item.replaceAll('a','4'));
let enrichment_5= origin_array.map(item => item.replaceAll('s','5'));


module.exports = {
  object: require('./object'),
  array: origin_array,
  regex: require('./regexp')
};
