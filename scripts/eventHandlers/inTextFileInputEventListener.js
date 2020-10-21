//The event listener for the in-text file upload
function inTextFileInputEventListener(e)
{
	const fileInput = e.target;
	const inTextArea = document.getElementById("inTextInput");
	
	//Get the file text and start the process
	const fileReader = new FileReader();
	fileReader.onload = function(fileReadEvent)
	{
		try
		{
			inTextArea.value = fileReadEvent.target.result;
		}
		catch(err)
		{
			handleError(err);
		}
	};
	fileReader.readAsText(fileInput.files[0]);
}

document.getElementById("inTextFileInput").onchange = inTextFileInputEventListener;