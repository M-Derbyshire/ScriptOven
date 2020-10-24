//There are certain formatting rules that should be followed in CSV files
function convertStringToCSVCompliantString(valueToConvert)
{
	// - If the value contains double-quotes, double them
	valueToConvert = valueToConvert.replace(/["]/g, '""');
		
	// - If there are double-quote or comma characters, the value needs to be surround by double-quotes
	if(/[,"]/.test(valueToConvert)) valueToConvert = `"${valueToConvert}"`;
	
	return valueToConvert;
}