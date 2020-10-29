// This takes an array of arrays. In each array, the first value 
// is the expected result, and the second value is the result 
// main() actually returned.

//This will return a string to be displayed as error text.

function generateFailedAssertionsResult(failedTestResults)
{
	let resultText = `There were ${failedTestResults.length} failed assertions:`;
	
	failedTestResults.forEach((testResult, index) => {
		resultText += `\n\n**********`;
		resultText += `\n\n - Expected result (${index + 1}): \n"${testResult[0]}"`;
		resultText += `\n\n - Actual result (${index + 1}): \n"${testResult[1]}"`;
	});
	
	return resultText;
}