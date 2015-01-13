
// Shows how any method can be overridden (intentionally or not).  Variable scope is important.

console.log = function(message) {
  console.log('This is not what you expected!');
}

console.log('Test log message');