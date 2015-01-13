
// Object values are persisted through reference

var terry = { name: 'Terry' };
var mike = { name: 'Mike' };

console.log(mike);

mike = terry;
console.log(mike);

terry.name = 'Chris';
console.log(mike);