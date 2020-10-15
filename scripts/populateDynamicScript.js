//Populates the dynamicScript element with the given script text
function populateDynamicScript(scriptText)
{
	const dynamicScript = document.getElementById("dynamicScript");
	
	try 
	{
		dynamicScript.text = scriptText;
	}
	catch(err)
	{
		handleError(err);
	}
}