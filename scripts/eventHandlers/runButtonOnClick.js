// Will run when the Run Function button is clicked
function runButtonOnClick(e)
{
	const scriptFileInput = document.getElementById("scriptFileInput");
	const inTextInput = document.getElementById("inTextInput");
	const outTextOutput = document.getElementById("outTextOuput");
	
	if(scriptFileInput.files.length === 0)
	{
		handleError("No script has been selected.");
		return;
	}
	
	//Get the file text and start the process
	const fileReader = new FileReader();
	fileReader.addEventListener('load', (fileReadEvent) => {
		try
		{
			runFunctionOnInputText(fileReadEvent.target.result);
		}
		catch(err)
		{
			handleError(err);
		}
	});
	fileReader.readAsText(scriptFileInput.files[0]);
}

document.getElementById("runFunctionButton").onclick = runButtonOnClick;