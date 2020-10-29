// This function takes 3 parameters. 

// The first is an array of assertions (this will be an array of arrays, 
// and each array will have 2 values. The first value is the text to 
// be inputted to main(), and the second is the expected output from 
// main()):

// E.g. assertionArray = [["input 1", "expected output 1"], ["input 2", "expected output 2"]];

// The second parameter is a reference main() function.

// The third parameter is an object containing the user's defined options.
// If a required option hasn't been provided, its default value is used.

// Options:
// - alertWhenAssertionsFailed (default value: true)
// - consoleLogWhenAssertionsFailed (default value: false)

// This function will return a string. If all assertions pass, the string
// will be "pass". Otherwise, the error text will be returned.
function testAssertions(assertionArray, mainFunc, optionsObj)
{
	//Set the option defaults
	if(!optionsObj.hasOwnProperty("alertWhenAssertionsFailed")) optionsObj.alertWhenAssertionsFailed = true;
	if(!optionsObj.hasOwnProperty("consoleLogWhenAssertionsFailed")) optionsObj.consoleLogWhenAssertionsFailed = false;
	
	//An array of arrays. In each array, the first value is the expected result,
	//and the second value is the result main() actually returned.
	let failedTestResults = [];
	
	let currentTestResult;
	
	assertionArray.forEach(assertionData => {
		currentTestResult = mainFunc(assertionData[0]);
		if(currentTestResult !== assertionData[1])
		{
			failedTestResults.push([
				assertionData[1],
				currentTestResult
			]);
		}
	});
	
	if(failedTestResults.length === 0)
	{
		return "pass";
	}
	
	const resultText =  generateFailedAssertionsResult(failedTestResults);
	
	if(optionsObj.alertWhenAssertionsFailed) alert(`There were ${failedTestResults.length} failed assertions.`);
	if(optionsObj.consoleLogWhenAssertionsFailed) console.log(resultText);
	
	return resultText;
}