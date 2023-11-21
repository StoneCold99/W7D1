//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/
//ANSWER
const inputString = "Hello, my dog is Fido, and they have Blue eyes!"   
const dogs = ["Fido","Precious","Sassy","Gertrude", "Shadow", "Potato", "Bart"]
   

  function dogNames(){
    const dogNames = [] 
for(const name of dogs){   
    if(inputString.includes(name)){ 
        dogNames.push(name)
    }
}
    return dogNames;  
}
const result = dogNames(inputString,dogs)   
console.log(result)  


//let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
//Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

//let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

function removeEvenIndexes(array) {
    for (let i = array.length - 1; i >= 0; i -= 2) {
      array.splice(i, 1, "even index");
    }
    return array;
  }

const array = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
console.log(removeEvenIndexes(array));

/**
 * 
 *         CODEWARS #1
 * 
 *  */            
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
// EVEN OR ODD
function evenOrOdd(n) {
    if (n % 2 == 0){
      return 'Even'} else {
        return 'Odd'
      }
}
/**
 * 
 *         CODEWARS #2
 * 
 *https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// Convert a Number to a String!*/
function numberToString(number) {
    return String(number);
  }
  
