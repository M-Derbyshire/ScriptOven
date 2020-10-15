//Tests that the script text contains a main function, and it has
//the correct amount of parameters
function mainFunctionDefinitionIsCorrect(scriptText)
{
	return /main\([^,]*\)/.test(scriptText);
}