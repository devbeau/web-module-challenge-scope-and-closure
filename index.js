// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 2 returns the updates count variable declared globally outside of the function.
 * Counter 1 returns a function that returns an updates count variable declared within the counterMaker function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 uses a closure. It is returning a function within the counterMaker function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 would be preferable if many different counters might need to be initalized and tracked.
 * Counter 2 might be preferable if there are no other counters that need to be tracked, or if different functions need to access
 * and update the same counter.

 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random()*3)

}

console.log("This is task 2:", inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numInnings){
  let scoreCountHome = 0;
  let scoreCountAway = 0;
  
  const score = () => {
    for (let i = 0; i < numInnings; i++){
      scoreCountHome += callback();
      console.log("This is the Home Inning Tracker from Task 3:", scoreCountHome);
      scoreCountAway += callback();
      console.log("This is the Away Inning Tracker from Task 3:", scoreCountAway);
    } // closes for loop
  return [scoreCountHome, scoreCountAway];
  } // closes score function

let finalScore = score();
  return {
    "Home": finalScore[0],
    "Away": finalScore[1],
  } // closes return object
} // closes finalScore function

console.log("This is task 3", finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(scoreCountHome, scoreCountAway){
  return scoreCountAway + " - " + scoreCountHome;
}


function scoreboard(callbackOne, callbackTwo, numInnings) {
  let scoreCountHome = 0;
  let scoreCountAway = 0;
  const scoreCountArray = [];
  const score = () => {
    for (let i = 0; i < numInnings; i++){
      scoreCountHome += callbackOne();
      console.log("This is the Home Inning Tracker from Task 4:", scoreCountHome);
      scoreCountAway += callbackOne();
      console.log("This is the Away Inning Tracker from Task 4:", scoreCountAway);
      scoreCountArray[i] = callbackTwo(scoreCountHome, scoreCountAway);
    } // closes for loop
  return [scoreCountArray];
  } // closes score function

let finalScore = score();
  return {
    "1st inning": scoreCountArray[0],
    "2nd inning": scoreCountArray[1],
    "3rd inning": scoreCountArray[2],
    "4th inning": scoreCountArray[3],
    "5th inning": scoreCountArray[4],
    "6th inning": scoreCountArray[5],
    "7th inning": scoreCountArray[6],
    "8th inning": scoreCountArray[7],
    "9th inning": scoreCountArray[8],
    "Final Score": scoreCountArray[8],
  } // closes return object
}

console.log("This is Task 4:", scoreboard(inning, getInningScore, 9));
