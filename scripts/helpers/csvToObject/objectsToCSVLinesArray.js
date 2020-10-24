//This will take 2 parameters. The first is an array of headers.
//The second is the array of objects to be converted to an array
//of CSV lines (as strings), which will then be returned.
function objectsToCSVLinesArray(orderedHeaders, objArrayToConvert)
{
	let result = [];
	
	//First, we need to convert the headers to a line, and add it to the result.
	//(Need to make the headers CSV format compliant before the reduce, as 
	//in reduce() the first item wouldn't get converted).
	const csvCompliantHeaders = orderedHeaders.map(val => convertStringToCSVCompliantString(val));
	
	result.push(csvCompliantHeaders.reduce((line, currentVal) => {
		return line + "," + currentVal;
	}));
	
	//Next, we need to create string lines out of the object array
	objArrayToConvert.forEach(element => {
		result.push(objectToCSVLine(orderedHeaders, element));
	});
	
	return result;
}

// A test input for the above function
// console.log(objectsToCSVLinesArray(["column1", 'column2', "column3"], [
// 	{ column1: "test1", column2: "te,st2", column3: 'te"st3' },
// 	{ column1: "test1", column2: "test2", column3: 'test3' }
// ]));