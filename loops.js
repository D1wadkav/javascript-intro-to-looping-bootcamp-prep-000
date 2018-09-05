function forLoop(arg) {
  for (var i = 0; i < 25; i++) {
  arg[i] = "I am ${i} strange loop.";
}
return arg
}