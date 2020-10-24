//Populates the dynamicScript element with the given script text
function populateDynamicScript(scriptText)
{
	//If the user had selected a different script first, then just setting
	//the text of the script tag won't change to the newer main() function. 
	//We need to actually clear the functions and replace the script element.
	
	if(typeof main === typeof Function) main = null;
	if(typeof options === typeof Function) options = null;
	if(typeof assertions === typeof Function) assertions = null;
	
	//NOTE: If the user's script defines another object (rather than just the
	//three that are cleared above), then that WILL NOT BE CLEARED.
	
	const dynamicScriptElementID = "dynamicScript";
	
	const currentDynamicScript = document.getElementById(dynamicScriptElementID);
	const newDynamicScript = document.createElement('script');
	newDynamicScript.id = dynamicScriptElementID;
	newDynamicScript.text = scriptText;
	
	currentDynamicScript.parentNode.replaceChild(newDynamicScript, currentDynamicScript);
}