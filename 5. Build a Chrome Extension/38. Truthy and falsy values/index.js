console.log(  Boolean("")   ) // F
console.log(  Boolean("0")  ) // T
console.log(  Boolean(100)  ) // T
console.log(  Boolean(null) ) // F
console.log(  Boolean([0])  ) // T because 0 is falsy but the array is truthy.
console.log(  Boolean(-0)   ) // F because 0 is falsy. Negative numbers aren't falsys tho.