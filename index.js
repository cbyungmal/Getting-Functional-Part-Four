//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE


/*

Write a function that can count the number of
genders in the dataset. The function will 
accept a string and an array as arguements. 
The output should be a number. 

*/

function genderCount(array, string){
//CODE BELOW HERE
for(var i = 0; i <= array.length - 1; i++){
  if(customer[i].gender === string){
      count++
  }
}

console.log(count)
//CODE ABOVE HERE
}

genderCount(customers, 'female')