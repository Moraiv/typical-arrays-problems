
exports.min = function min (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
  let min = array[0];
    for (let i = 1; i < array.length; i++)
        if (array[i] < min) min = array[i];
    return min;
}

exports.max = function max (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
 let max = array[0];
    for (let i = 1; i < array.length; i++)
        if (array[i] > max) max = array[i];
    return min;
}

exports.avg = function avg (array) {
  if (typeof array === undefined  || array.length === 0) return 0;
 var avgNumber = 0;
 for (let x = 0; x < array.length; x++) {
 avgNumber += array[x]
 }
   return avgNumber/array.length;
}
