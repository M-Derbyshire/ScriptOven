//Converts a line from a csv file into an array of string values.
//When reading this code, think of the below example lines:
//*******************************************************
// test,"test","te,st","",,"te""st",test
// test,"test"
// test,"""test"""
//*******************************************************

function csvLineToStringArray(line)
{
	let result = [];
	let currentString = "";
	let withinQuotes = false; //Is the current character within outer quotes (Don't include inner escaped quotes)?
	let valueStartPosition = 0; //The index of the starting character in the current field
	let valueEndPosition = 0;
	
	for(let i = 0; i < line.length; i++)
	{
		//Should we move to the next value?
		//(in-case this changes in the future, we'll keep checking that we're not at the end of the line
		//in the later conditionals, even though it's tested here)
		if((line[i] === "," && !withinQuotes) || i === line.length - 1)
		{
			valueEndPosition = (i === line.length - 1) ? i + 1 : i; //We'll need to include the last character of the line
			if(line[valueEndPosition - 1] === '"') valueEndPosition--; //We don't want to include the closing brace (if there's inner braces, there's also outer)
			
			result.push(line.substring(valueStartPosition, valueEndPosition));
			valueStartPosition = i + 1;
		}
		//If entering or leaving the outer-quotes of a field
		//(need to ignore escaped quote chars). Also need to 
		//increase the valueStartPosition if this is an opening
		//mark, so we don't include the quote mark
		else if(line[i] === '"' && (!withinQuotes || 
			(i === line.length - 1 || line[i+1] !== '"'))) 
		{
			withinQuotes = !withinQuotes
			if(withinQuotes) valueStartPosition = i + 1;
		}
		// If reaching an escaped double-quote, just remove one (and then next run will skip over the other)
		else if(withinQuotes && line[i] === '"' && i !== line.length - 1 && line[i+1] === '"')
		{
			line = line.slice(0, i) + line.slice(i + 1);
		}
	}
	
	return result;
}

//Some test cases for if you change the above function
// console.log(csvLineToStringArray('test,"test","te,st","",,"te""st",test'));
// console.log(csvLineToStringArray('test,"test"'));
// console.log(csvLineToStringArray('test,"""test"""'));