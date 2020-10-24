//This will take 2 parameters. The first is an array of headers.
//The second is the object to be converted to a CSV line.

//This will return a CSV formatted string of the object's values, in
//the order defined in the orderedHeaders array (all data values will
//need to be of a type that inherits from Object -- which is most types).
function objectToCSVLine(orderedHeaders, objectToConvert)
{
	let result = "";
	let currentValue;
	
	for(let i = 0; i < orderedHeaders.length; i++)
	{
		currentValue = objectToConvert[orderedHeaders[i]].toString();
		
		//There are certain formatting rules that should be followed in CSV files
		
		// - If the value contains double-quotes, double them
		currentValue = currentValue.replace(/["]/g, '""');
		
		// - If there are double-quote or comma characters, the value needs to be surround by double-quotes
		if(/[,"]/.test(currentValue)) currentValue = `"${currentValue}"`;
		
		result += (i === orderedHeaders.length - 1) ? currentValue : currentValue + ",";
	}
	
	return result;
}