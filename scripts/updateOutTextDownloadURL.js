//Set the URL on the download link for the out-text
function updateOutTextDownloadURL()
{
	// See https://shinglyu.com/web/2019/02/09/js_download_as_file.html
	
	const outTextArea = document.getElementById("outTextOuput");
	const outTextDownloadLink = document.getElementById("outTextDownloadLink");
	
	const dataForDownload = new Blob([outTextArea.value], {type: "text/plain"});
	
	// We want to delete the last URL. If the user is working with a lot of
	//data, and they're working through multiple files, we don't want to keep
	//all of this in memory.
	if(outTextDownloadLink.hasAttribute("href"))
	{
		window.URL.revokeObjectURL(outTextDownloadLink.href);
	}
	
	const downloadURL = window.URL.createObjectURL(dataForDownload);
	
	outTextDownloadLink.href = downloadURL;
	setDownloadButtonDisabledStatus();
}