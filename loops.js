function forLoop(arg) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
   arg.push("I am 1 strange loop.");
  } else {
    arg.push(`I am ${i} strange loops.`); 
  }
}
return arg
}