// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');

let astronautCount = input.question("Enter number of passengers: ");
console.log(Number(astronautCount))
const date = "Monday 2019-03-18"
const time = "10:05:34 AM"

const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = (astronautCount * averageAstronautMassKg)
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg)
const fuelTempCelsius = -225
const fuelLevel = "100%"
const weatherStatus = "clear"


// Write code to generate the LC04 report here:

console.log("-------------------------------------")
console.log("> LC04 - LAUNCH CHECKLIST")
console.log("-------------------------------------")
console.log("Date: " + date)
console.log("Time: " + time)

console.log("-------------------------------------")
console.log("> ASTRONAUT INFO")
console.log("-------------------------------------")
console.log("* count: " + astronautCount)
console.log("* status: " + astronautStatus)

console.log("-------------------------------------")
console.log("> FUEL DATA")
console.log("-------------------------------------")
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C")
console.log("* Fuel level: " + fuelLevel)

console.log("-------------------------------------")
console.log("> MASS DATA")
console.log("-------------------------------------")
console.log("* Crew mass: " + crewMassKg + " kg")
console.log("* Fuel mass: " + fuelMassKg  + " kg")
console.log("* Shuttle mass: " + shuttleMassKg  + " kg")
console.log("* Total mass: " + totalMassKg  + " kg")

console.log("-------------------------------------")
console.log("> FLIGHT PLAN")
console.log("-------------------------------------")
console.log("* weather: " + weatherStatus)

console.log("-------------------------------------")
console.log("> OVERALL STATUS")
console.log("-------------------------------------")
console.log("* Clear for takeoff: YES")




// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.