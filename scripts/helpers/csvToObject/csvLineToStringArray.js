//Converts a line from a csv file into an array of string values.
//When reading this code, think of the below example line:
//*******************************************************
// test,"test","te,st","",,"te""st",test
//*******************************************************

function csvLineToStringArray(line)
{
	let result = [];
	let currentString = "";
	let withinQuotes = false; //Is the current character within outer quotes (Don't include inner escaped quotes)?
	
	for(let i = 0; i < line.length; i++)
	{
		//Should we move to the next value?
		//(in-case this changes in the future, we'll keep checking that we're not at the end of the line
		//in the later conditionals, even though it's tested here)
		if((line[i] === "," && !withinQuotes) || i === line.length - 1)
		{
			//If this was triggered because it's the end of the line, we
			//also want to push this char onto the current string (if not, a 
			//comma triggered it, and we can ignore that).
			if(i === line.length - 1) currentString += line[i];
			
			result.push(currentString);
			currentString = "";
		}
		//entering or leaving the outer-quotes of a field
		//(need to ignore escaped quote chars)
		else if(line[i] === '"' && (!withinQuotes || 
			(i === line.length - 1 || line[i+1] !== '"'))) 
		{
			withinQuotes = !withinQuotes
		}
		// If reaching an escaped double-quote, just record one and skip the other
		else if(withinQuotes && line[i] === '"' && i !== line.length - 1 && line[i+1] === '"')
		{
			currentString += '"';
			i++;
		}
		//Finally, just add the current character to the current string value
		else
		{
			currentString += line[i];
		}
	}
	
	return result;
}

//A test case for if you change the above function
// console.log(csvLineToStringArray('test,"test","te,st","",,"te""st",test'));