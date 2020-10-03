
exports.min = function min (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
 var avgNumber = 0;
 for (let x = 0; x < array.length; x++) {
 avgNumber += array[x]
 }
   return avgNumber/array.length;
}
