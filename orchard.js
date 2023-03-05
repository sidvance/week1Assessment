///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0

//initiated the for loop at 0, and it will iterate in increments of 1 until the length of the array is less than the the index.
 for (let i = 0; i < fujiAcres.length; i++){
    //total acres will be each array looped through, added together
     totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
 }
 console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

//daily average acres pickes is taken when dividing total number of acres by how many days it took to pick them.
 let averageDailyAcres = totalAcres / fujiAcres.length

 console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let daysLeft = 0

//while loop will run until while there are still acres to be picked, meaning any amount of acres greater than 0.
while (acresLeft > 0){
   //each iteration of the loop will add 1 to 'daysLeft'
    daysLeft++;
    //each iteration of the loop will subtract the value of averageDailyAcres from how many acres are left to pick
    acresLeft -= averageDailyAcres;
}
console.log(daysLeft)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
//the sliced arrays now become copied and are represented by new variables
 let fujiTons = fujiAcres.slice()
 let galaTons = galaAcres.slice()
 let pinkTons = pinkAcres.slice()

 //for loop is initiated and will iterate in increments of 1 until the index is greater than the length of the array
 for (let i = 0; i < fujiTons.length; i++){
    //each element in each listed array, which represent amount of picked acres, will be muliplied by 6.5tons to find how many tons of apples were picked each day.
    fujiTons[i] *= 6.5;
    galaTons[i] *= 6.5;
    pinkTons[i] *= 6.5;
 }
console.log(fujiTons, galaTons, pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/


let fujiPounds = fujiTons.slice()
let galaPounds = galaTons.slice()
let pinkPounds = pinkTons.slice()
let totalFujiPounds = 0
let totalGalaPounds = 0
let totalPinkPounds = 0


for (let i = 0; i < fujiPounds.length; i++){
    fujiPounds[i] *= 2000;
    galaPounds[i] *= 2000;
    pinkPounds[i] *= 2000;
    totalFujiPounds += fujiPounds[i];
    totalGalaPounds += galaPounds[i];
    totalPinkPounds += pinkPounds[i];
}
console.log(totalFujiPounds, totalGalaPounds, totalPinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
