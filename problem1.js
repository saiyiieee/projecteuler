var counter = 1000;
var checked = 0;

for (var i = 0; i < counter; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    checked += i;
  }
}

console.log(checked);