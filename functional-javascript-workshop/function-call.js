module.exports = Function.call.bind(Array.prototype.slice);

// ok! I looked this one up - but I can explain it:
//
// bind() returns a function like so:
//
//   function( /* args */ ) {
//     return Array.prototype.slice.call( /* args */ )
//   }
//
// and because call's first argument will be the value of 'this',
// using the bound function as slice(array, number, number) will
// work as specified, nice really.
