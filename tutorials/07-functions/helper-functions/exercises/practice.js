/**** HELPER FUNCTIONS: PRACTICE SOLUTION ****/

/*
    Practice refactoring code and delegating tasks to dedicated 
    helper functions to clean up ship systems.
*/

/** EXERCISE 1: THE CARGO DISTRIBUTOR **/

// TODO: Create a helper function named 'calculateMassInKg'. It should take
// a parameter 'metricTons' and return that value multiplied by 1000.

function calculateMassInKg(metricTons) {
	return metricTons * 1000;
}

// TODO: Complete the main function below. Use your 'calculateMassInKg' helper
// inside the loop to calculate each pod's weight in kilograms.

function processLogisticsManifest(cargoPodsArray) {
	console.log("--- Processing Logistics Manifest ---");

	for (let i = 0; i < cargoPodsArray.length; i++) {
		let massInKg = calculateMassInKg(cargoPodsArray[i]);
		console.log(`Pod #${i + 1}: ${massInKg} kg`);
	}
}

let cargoMass = [5, 12, 3.5];

// TODO: Call your main function and test it with the cargoMass array

console.log(calculateMassInKg[5]);//comes back undefined
console.log(calculateMassInKg[12]);//comes back undefined
console.log(calculateMassInKg[3.5]);//comes back undefined

console.log(processLogisticsManifest(cargoMass));

/** EXERCISE 2: COMMUNICATION SCRUBBER **/

// TODO: Create a helper function named 'sanitizeInput'. It should take a string
// parameter 'text', remove leading/trailing spaces, and convert it to lowercase.
function sanitizeInput(text){
	return text.trim().toLowerCase()
}
// TODO: Complete the main function below. Use your 'sanitizeInput' helper to
// clean the user's transmission command before checking it.
function processIncomingTransmission(rawCommand) {
	let cleanCommand = sanitizeInput(rawCommand);

	if (cleanCommand === "abort launch") {
		console.log("🚨 EMERGENCY TRANSMISSION VALIDATED: Halting launch sequences.");
	} else {
		console.log("Transmission processed. Command unrecognized.");
	}
}

let command = "  ABORT LAUNCH   ";

// TODO: Call the main function and test it with the command above.

console.log(sanitizeInput(command));
