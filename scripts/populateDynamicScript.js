//Populates the dynamicScript element with the given script text
function populateDynamicScript(scriptText)
{
	//If the user had selected a different script first, then just setting
	//the text of the script tag won't change to the newer main() function. 
	//We need to actually replace the script element.
	const dynamicScriptElementID = "dynamicScript";
	
	const currentDynamicScript = document.getElementById(dynamicScriptElementID);
	const newDynamicScript = document.createElement('script');
	newDynamicScript.id = dynamicScriptElementID;
	newDynamicScript.text = scriptText;
	
	currentDynamicScript.parentNode.replaceChild(newDynamicScript, currentDynamicScript);
}