// Variables for the storm report
const stormName = "Typhoon Kammuri";
const stormCategory = 3; // Category 1 to 5
const windSpeed = 120; // Wind speed in mph
const stormStatus = "approaching";

// Concatenated string variable
const stormReport = `Alert! ${stormName} is currently a Category ${stormCategory} storm with wind speeds of ${windSpeed} mph and is ${stormStatus}.`;
console.log(stormReport);

// If conditional statement
if (stormCategory >= 4) {
    console.log("Warning: This is a major storm. Take precautions!");
} else {
    console.log("This storm is manageable, but stay alert.");
}

// Switch statement for storm category
switch (stormCategory) {
    case 1:
        console.log("Category 1: Very dangerous winds will produce some damage.");
        break;
    case 2:
        console.log("Category 2: Extremely dangerous winds will cause extensive damage.");
        break;
    case 3:
        console.log("Category 3: Devastating damage will occur, be prepared.");
        break;
    case 4:
        console.log("Category 4: Catastrophic damage will occur, evacuate if necessary.");
        break;
    case 5:
        console.log("Category 5: Total destruction is expected. Seek shelter immediately!");
        break;
    default:
        console.log("Unknown storm category.");
}

// String method example: Converting storm name to uppercase
const upperCaseStormName = stormName.toUpperCase();
console.log(`Storm Name in Upper Case: ${upperCaseStormName}`);

// Number method example: Checking if windSpeed is above a certain threshold
const windSpeedThreshold = 100;
const isWindSpeedHigh = windSpeed > windSpeedThreshold;
console.log(`Is the wind speed above ${windSpeedThreshold} mph? ${isWindSpeedHigh}`);