// Takes a string (with multiple lines), and returns an array where
//each line is an item.
function stringToLineArray(stringToSplit)
{
	return stringToSplit.split(/\r?\n/);
}