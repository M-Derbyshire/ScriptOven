// This takes an array of arrays. In each array, the first value 
// is the expected result, and the second value is the result 
// main() actually returned.

//This will return a string to be displayed as error text.

function generateFailedAssertionsResult(failedTestResults)
{
	let resultText = `There were ${failedTestResults.length} failed assertions:`;
	
	for(let i = 0; i < failedTestResults.length; i++)
	{
		resultText += `\n\n**********`;
		resultText += `\n\n - Expected result (${i + 1}): \n"${failedTestResults[i][0]}"`;
		resultText += `\n\n - Actual result (${i + 1}): \n"${failedTestResults[i][1]}"`;
	}
	
	return resultText;
}