//A keyup event for when the download filename is changed.
//This will change the outTextDownloadLink download filename.
//Better to use keyup, than onchange, to be sure that the
//filename is always updated correctly, if focus is only lost
//by clicking on the download button.
function downloadFilenameInputKeyUp()
{
	const downloadFileNameInput = document.getElementById("downloadFileNameInput");
	const outTextDownloadLink = document.getElementById("outTextDownloadLink");
	
	outTextDownloadLink.download = downloadFileNameInput.value;
}