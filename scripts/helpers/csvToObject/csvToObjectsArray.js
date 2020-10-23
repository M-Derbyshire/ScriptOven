// Takes an array of strings (each one being a line of CSV data).

// Optionally, can also take an array of strings to be treated as the
//column headers. If the headers array is not provided, the first line
//of the CSV array will be used as the headers instead.

// This will return an array of objects, where the property names are
//the column headers, and the data is mapped to the correct properties.
function csvToObjectsArray(csvLines, headers = [])
{
	//If no headers are explicitly provided, we use the first row
	if(headers.length === 0)
	{
		headers = csvLineToStringArray(csvLines.shift());
	}
	
	//Now we convert the rest of the lines into objects
	let result = [];
	let currentLineArray = [];
	
	for(let lineIter = 0; lineIter < csvLines.length; lineIter++)
	{
		currentLineArray = csvLineToStringArray(csvLines[lineIter]);
		result[lineIter] = {};
		
		for(let propertyIter = 0; propertyIter < headers.length; propertyIter++)
		{
			result[lineIter][headers[propertyIter]] = currentLineArray[propertyIter];
		}
	}
	
	return result;
}