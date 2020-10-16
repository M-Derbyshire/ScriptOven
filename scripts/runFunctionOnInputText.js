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
	let resultText;
	
	try 
	{
		populateDynamicScript(functionText);
		resultText = main(inTextInput.value);
	} 
	catch (err) 
	{
		handleError(err);
		return;
	}
	
	//normal equality, so will also catch undefined
	if(resultText == null)
	{
		handleError('The given "main" function ran, but it did not return a valid value.');
		return;
	}
	
	outTextOuput.value = resultText;
}