//The event listener for the in-text file upload
function inTextFileInputEventListener()
{
	const fileInput = document.getElementById("inTextFileInput");
	const inTextArea = document.getElementById("inTextInput");
	
	//Get the file text and start the process
	const fileReader = new FileReader();
	fileReader.addEventListener('load', (event) => {
		try
		{
			inTextArea.value = event.target.result;
		}
		catch(err)
		{
			handleError(err);
		}
	});
	fileReader.readAsText(fileInput.files[0]);
}