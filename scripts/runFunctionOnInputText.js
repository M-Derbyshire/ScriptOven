//Called by the FileReader callback (in runButtonOnClick()). Takes the 
//text from the script file.
function runFunctionOnInputText(functionText)
{
	//Does the given script text contain a "main" function that takes only 1 parameter?
	if(!mainFunctionDefinitionIsCorrect(functionText))
	{
		handleError('The uploaded script does not contain a "main" function (or the given function does not accept only 1 parameter).');
		return;
	}
	
	const inTextInput = document.getElementById("inTextInput");
	const outTextOuput = document.getElementById("outTextOuput");
	
	try 
	{
		populateDynamicScript(functionText);
		
		
		//Get the options object.
		let optionsObj = {};
		if(typeof options === typeof Function)
		{
			optionsObj = options();
			if(optionsObj !== Object(optionsObj) || Array.isArray(optionsObj))
			{
				handleError('The given "options" function ran, but it did not return a valid object value.');
				return;
			}
		}
		
		
		const resultText = main(inTextInput.value);
		if(typeof resultText !== "string")
		{
			handleError('The given "main" function ran, but it did not return a valid string value.');
			return;
		}
		
		outTextOuput.value = resultText;
		
		//Need to update the download URL on the out-text download link
		updateOutTextDownloadURL();
	} 
	catch (err) 
	{
		handleError(err);
		return;
	}
}