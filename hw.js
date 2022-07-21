//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string_, list){
    for (let i = 0; i < list.length; i++) {
        if (string_.includes(list[i])) {
            console.log(`Matches ${list[i]}`)
        }else if (string_.includes(list[i].toLowerCase())){
            console.log(`Mathes ${list[i]}`)
        }else if (string_.includes(list[i].toUpperCase())){
            console.log(`Matches ${list[i]}`)
        }else if (((string_.charAt(0).toUpperCase() + string_.substr(1).toLowerCase())).includes(list[i]))
        console.log(`Matches ${list[i]}`)
    }
    //Your code goes here
}
findWords(dog_string, dog_names)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let i = 0;
    while (i < arr.length){
        if (arr.indexOf(arr[i]) % 2 == 0) {
            arr.splice(0,1,"even index")
            
        }i++;
    }console.log(arr)
}
replaceEvens(Given_arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]