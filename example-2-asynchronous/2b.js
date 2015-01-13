// Asynchronous behavior undesired result

var people = [];

function getPeople() {
  setTimeout(function() {
    return ['Terry', 'Mike', 'Chris'];
  }, 2000);
}

people = getPeople();
console.log(people);