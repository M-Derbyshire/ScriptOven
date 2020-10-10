const fs = require('fs');

//---------------------------------------------------
// Script functions 
//--------------------------------------------------

//Checks if directories/files exist and are accessible,
//and throws an exception if not.
function pathIsAccesible(path) 
{
    try{
        fs.accessSync(path);
    }
    catch(err)
    {
        throw `Sorry, but ${path} either doesn't exist, or you do not have the correct permissions to access it: ${err}`;
    }
};


//Takes the path to the build config JSON file.
//Returns the build config object, or throws an exception
function getBuildConfigObject(path)
{
	try 
	{
		pathIsAccesible(path); //Throws an exception if not
		return JSON.parse(fs.readFileSync("./build_config.json", "utf-8")); //Won't cache like require
	}
	catch(err)
	{
		throw "Error generating build config object: " + err;
	}
}


//Load in all of the src .js files (not including .test.js), within the given
//path, and then return an array of the files. Will throw an exception if 
//there is an issue.
function loadSourceFilesIntoString(path)
{
    //recursively go through folders and get js files
    let srcFileContents = "";
	let fullDirectoryList;
	
	try
	{
		pathIsAccesible(path);
		fullDirectoryList = fs.readdirSync(path);
	}
	catch(err)
	{
		throw `Problem while accessing ${path}: ${err}`;
	}
	
	const fileContentsSeperatorText = "\n\n"
    
    fullDirectoryList.forEach((item) => {
        try
		{
			if(fs.lstatSync(path + "/" + item).isDirectory())
			{
				srcFileContents += loadSourceFilesIntoString(path + "/" + item) + fileContentsSeperatorText;
			}
			else
			{
				if(!item.endsWith(".test.js")) //don't include tests
				{
					let fullFilePath = path + "/" + item;
					srcFileContents += fs.readFileSync(fullFilePath, "utf-8") + fileContentsSeperatorText;
				}
			}
		}
		catch(err)
		{
			throw "Error while loading source files: " + err;
		}
    });
    
    return srcFileContents;
};


//Generates a RegExp object, to be used to identify the tag with the given name
function generateTagRegExpFromTagName(name)
{
	return new RegExp(`{{\\s*${name}\\s*}}`);
}


//Replace a tag (in the given original string) with a new string value
function replaceTagWithText(originalString, tagName, replacementText)
{
	return originalString.replace(generateTagRegExpFromTagName(tagName), replacementText);
}


// -------------------------------------------------------------------
// build process:
// -------------------------------------------------------------------

const buildConfigPath = "./build_config.json";
const styleTagName = "style";
const scriptTagName = "script";

try
{
	const buildConfig = getBuildConfigObject(buildConfigPath);
	const template = fs.readFileSync(buildConfig.templatePath, "utf-8");
	const scriptsText = loadSourceFilesIntoString(buildConfig.scriptDirectory);
	const stylesText = loadSourceFilesIntoString(buildConfig.styleDirectory);
	
	const templateWithStyles = replaceTagWithText(template, styleTagName, stylesText);
	const populatedTemplate = replaceTagWithText(templateWithStyles, scriptTagName, scriptsText);
	
	const buildPath = buildConfig.buildDirectory + "/" + buildConfig.buildFileName;
	if(!fs.existsSync(buildConfig.buildDirectory)) fs.mkdirSync(buildConfig.buildDirectory);
	
	fs.writeFileSync(buildPath, populatedTemplate);
	console.log(`Build generated successfully at ${buildPath}`);
}
catch(err)
{
	console.log(`There was a problem while making the build: ${err}`);
	process.exit(1);
}