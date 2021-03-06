//This will take 2 parameters. The first is an array of headers.
//The second is the object to be converted to a CSV line.

//This will return a CSV formatted string of the object's values, in
//the order defined in the orderedHeaders array (all data values will
//need to be of a type that inherits from Object -- which is most types).

//This may display an alert (or do whatever actions handleError() is 
//performing) and throw an exception, if the given object
//doesn't have one of the parameters defined in orderedHeaders.
function objectToCSVLine(orderedHeaders, objectToConvert)
{
	let result = "";
	let currentValue;
	
	orderedHeaders.forEach((header, index) => {
		//First, check this object has a property matching the header name.
		//If not, call handleError(), and then throw an exception
		if(!objectToConvert.hasOwnProperty(header))
		{
			const errText = `Error while converting an object to a CSV line. The object does not have a ${header} property.`;
			handleError(errText);
			throw new Error(errText);
		}
		
		currentValue = convertStringToCSVCompliantString(objectToConvert[header].toString());
		result += (index === orderedHeaders.length - 1) ? currentValue : currentValue + ",";
	});
	
	return result;
}