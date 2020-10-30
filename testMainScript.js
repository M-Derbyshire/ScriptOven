/*
Example input text:

column1,column2,column3
I like dogs.,I like frogs.,I like hogs.
I like cats,I like bats,I like rats

*/

function main(inputString)
{
	//Take the word "like", and replace it with "love".
	//Also, if the last character in a value is a period, replace with an exclamation mark
	
	const inputLines = stringToLineArray(inputString);
	const orderedHeaders = csvLineToStringArray(inputLines[0]);
	let inputObjects = csvToObjectsArray(inputLines);
	
	inputObjects.forEach(obj => {
		orderedHeaders.forEach(header => {
			
			const lastIndexInValue = obj[header].length - 1;
			
			obj[header] = obj[header].replace(/like/g, "love");
			if(obj[header][lastIndexInValue] === '.')
			{
				obj[header] = obj[header].substring(0, lastIndexInValue) + "!";
			}
			
		});
	});
	
	const resultLines = objectsToCSVLinesArray(orderedHeaders, inputObjects);
	return lineArrayToMultilineString(resultLines);
}

function assertions()
{
	return [
		[
			"column1,column2,column3\nI like dogs.,I like frogs.,I like hogs.\nI like cats,I like bats,I like rats",
			"column1,column2,column3\nI love dogs!,I love frogs!,I love hogs!\nI love cats,I love bats,I love rats"
		],
		[
			"column1,column2\nI like mice.,I like lice.\nI like birds,I like herds",
			"column1,column2\nI love mice!,I love lice!\nI love birds,I love herds"
		],
	];
}

function options()
{
	return {
		alertWhenAssertionsFailed: true,
		consoleLogWhenAssertionsFailed: true
	};
}