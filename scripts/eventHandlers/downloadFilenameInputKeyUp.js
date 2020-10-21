//A keyup event for when the download filename is changed.
//This will change the outTextDownloadLink download filename.
//Better to use keyup, than onchange, to be sure that the
//filename is always updated correctly, if focus is only lost
//by clicking on the download button.
function downloadFilenameInputKeyUp(e)
{
	const downloadFileNameInput = e.target;
	const outTextDownloadLink = document.getElementById("outTextDownloadLink");
	const outTextDownloadButton = document.getElementById("outTextDownloadButton");
	
	outTextDownloadLink.download = downloadFileNameInput.value;
	setDownloadButtonDisabledStatus();
}

document.getElementById("downloadFileNameInput").onkeyup = downloadFilenameInputKeyUp;