module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  bracketsConfig.forEach( arr => brackets[arr[0]] = arr[1])
  let cache = [];
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if(!cache) cache.push(str[i])
    if(cache) {
      brackets[cache[cache.length - 1]] == str[i] ? cache.pop() : cache.push(str[i])
    }
  }
  return cache.length === 0 
}
