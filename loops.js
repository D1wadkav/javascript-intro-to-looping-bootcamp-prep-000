function forLoop(arg) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
   arg[1] = "I am 1 strange loop.";
  } else {
    arg[i] = "I am ${i} strange loop."; 
  }
}
return arg
}