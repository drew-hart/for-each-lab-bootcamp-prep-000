function iterativeLog (array) {
  array.forEach(logArrayElement)
}

var logArrayElement = (element, index, array)  => console.log(`${index}: ${element}`)

function iterate (callback) {
  var array = ['a', 'b', 'c', 'd']
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
