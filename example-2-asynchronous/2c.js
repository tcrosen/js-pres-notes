// Managing asynchronous behavior with callbacks

var people = [];

function getPeople(done) {
  setTimeout(function() {
    done(['Terry', 'Mike', 'Chris']);
  }, 2000);
}

getPeople(function(results) {
  people = results;
  console.log(people);
});