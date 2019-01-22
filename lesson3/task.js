// solve next tasks using array methods(map, filter,...)

// #1 For the following array double the even numbers and leave the odd numbers the same.
var arr = [1,2,3,4];


// #2 For the following array find countries where population is higher than 500 million
var data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

// #3 Find out which cinema visitors are allowed to watch "18+ category" films. 

var cinemaVisitors = [
  {
    name: 'visitor1',
    getAge: function() {return 18},
    withParents: function() {return false}
  },
  {
    name: 'visitor2',
    getAge: function() {return 16},
    withParents: function() {return true}
  },
  {
    name: 'visitor3',
    getAge: function() {return 25},
    withParents: function() {return false}
  },
  {
    name: 'visitor4',
    getAge: function() {return 17},
    withParents: function() {return false}
  },
  {
    name: 'visitor5',
    getAge: function() {return 20},
    withParents: function() {return false}
  },
];