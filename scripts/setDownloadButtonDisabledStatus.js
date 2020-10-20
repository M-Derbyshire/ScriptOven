//Will check if the out-text download button should be enabled, and
//then set it accordingly
function setDownloadButtonDisabledStatus()
{
	const downloadFileNameInput = document.getElementById("downloadFileNameInput");
	const outTextDownloadLink = document.getElementById("outTextDownloadLink");
	const outTextDownloadButton = document.getElementById("outTextDownloadButton");
	
	if(outTextDownloadLink.hasAttribute("href") && downloadFileNameInput.value !== "")
	{
		outTextDownloadButton.disabled = false;
	}
	else
	{
		outTextDownloadButton.disabled = true;
	}
}