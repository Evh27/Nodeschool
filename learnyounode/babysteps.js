var args = process.argv.slice(2);

var sum = Number(0);

args.forEach(function(arg) {
  sum += Number(arg)
});

console.log(sum);