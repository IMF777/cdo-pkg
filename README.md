# PKG

PKG is a code.org AppLab project for importing libraries or frameworks, called packages. Each package is stored on github, and imported via requests to [raw.githubusercontent.com](https://raw.githubusercontent.com) using ```startWebRequest()```. Upon recieval, package is then evaluated and returned.

## Why PKG was created

### The problem with cdo libraries

Code.org does allow the export and import of libraries, but with restrictions. Libraries are imported via a unique library ID, and cannot be published to the public. Moreover, there is a specific size limit for each library, and once it exceeds the limit it is no longer publishable. The solution is to create multiple libraries stemming from the same framework and somehow connect them.

However, this creates a disorganized project space with lots of otherwise unneccessary libraries. Furthermore, it's painstaking to copy-paste library IDs and wait for the browser to refresh per each library import. This problem is emphasized when each project needs the same essential libraries and the process needs to be repeated.

### About http requests

High on the list of code.org's limitations is the inability to make http requests. If it was possible to recieve data from GET requests, .js files could be requested and evaled, ending the library problem.

Several workarounds have been created to bypass this limitation, such as requesting and decoding data through the use of images, or using another source to do the requests for you.

However, there is an EASY workaround to store and get files.

### The workaround

AppLab has a function called ```startWebRequest()``` that makes an http request to the url given as paramater, and returns the content recieved. Unfortunately, it's not possible to access every site and only a few domains are authorized.

Many domains listed as authorized in the documentation, are not actually accessible when calling the function, for example [dweet.io](https://dweet.io). The actual list of allowed domains is returned as the content parameter of ```startWebRequest()```, in the case of an unauthorized domain being requested.

On this list, I found the domain [api.github.com](https://api.github.com), which serves github repository data, and this is what gave me the idea. I created a repository to store .js files, and used ```startWebRequest()``` to make api calls to the file. The file contents are encoded in base64, however, and I had to make a function that decoded base64 into utf.

### Creating PKG

After that, I started making the PKG library. My initial version was designed to support package versioning logic (SemVer), dependency logic (for faster loads), package store and more such features. I made good progress, but got stuck in the process of writing dependency logic. I kind of lost interest in PKG then, and the library stayed untouched for a while.

Months later, after seeing PKG appear in "my projects", I started recreating it with a new structure from scratch. This time, I was more realistic than the previous attempt. I decided version logic was largely unneccessary for AppLab libraries. And I also used [raw.githubusercontent.com](https://raw.githubusercontent.com), which served raw file content, instead of encoded base64 strings. The library became smaller and more organized.

## How to use

### Import PKG

Import PKG to AppLab project from the following library ID: **ptsuaZ24gmxeSzHQSQFIFHdd36mNl4HHKa11YoOTXDY**

### Setting up PKG settings

PKG default settings can be overwritten with ```PKG.Settings(settings)``` function. Expects an object with three optional properties as argument:
- ```settings.keyValues [false || true]```
When true, sets key values indicating package source url for faster loading speeds. This is useful during the project development phase, but not for the published project. The key is set as "package_href_*<package-name>*:*<version>*". Default value is false.
- ```settings.throwError [false || true || "console"]```
When true, throws an error when package cannot be loaded. When value is "console", prints the error message to the console. Default value is false.
- ```settings.onError [Function]```
Called whenever an error occurs, with the error message as argument.
    
### Using PKG

#### Types of import

There are two ways to import a PKG package: local and global import. For this purpose, PKG creates two functions in the global scope: ```package()``` and ```require()```. I used ```package``` because it is a reserved word and AppLab doesn't show a yellow triangle warning, and somehow ```require``` doesn't either, even though it isn't defined in the AppLab interpreter.

#### Local import

A local import is done with ```require(name, version?)```. If version is left empty, requests the latest version of the package. Returns the an object with the package functions, and an ```onload``` function called when package is loaded.

Here is an example of locally importing a package called [sem](https://github.com/IMF777/cdo-pkg/main/packages/sem/README.md), which has two functions: ```$``` and ```Template```.

```
var sem = require("sem"); // import latest version of package "sem" version
sem.onload = function(){ // when sem is loaded
  // the code here will execute when sem has been loaded
  sem.$("screen1").backgroundColor = "red";
}
```

Notice, sem.$ or sem.Template will return undefined when referred to before package is loaded, since loading is an asynchronous task. AppLab may cache the response of ```startWebRequest()```, so this might not always be the case.

```
var sem = require("sem");
sem.$("screen1").backgroundColor = "red"; // throws an error as package hasn't loaded yet
```

This is why sem.onload must be used. The most-readable solution is as following:

```
var sem = require("sem");
sem.onload = main;

function main(){
  sem.$("screen1").backgroundColor = "red";
}
```

#### Global import

Packages with ```"type":"window"``` support global importing. The functions in globally imported packages are defined in the global scope. Global importing is done with ```package(name, version?)```, which internally calls ```require()```. The only difference is that ```package()``` adds the functions to the global scope, and only returns the ```onload``` property.

```
package("sem").onload = main;

function main(){
  $("screen1").backgroundColor = "red";
}
```

```package()``` supports an array argument, loading all packages with one call, reducing the code in your project. All package functions will be added to the global space with the same identifiers.

```
package(["sem","base64"]).onload = main;

function main(){
    $("screen1").backgroundColor = "red";
    stringToBase64("Hello World");
}
```

#### Versions

```require()``` and ```package()``` can load earlier versions of a package, if an optional version argument is passed.

```
require("sem","1.0.0"); // Loads the first version of sem
package("sem",1.0.0); // Global equivalent of above local import
package(["sem:1.6.0","base64:1.0.0"]); // If argument to package is an array, package name and version are seperated by a colon
```

If ```settings.keyValues``` is ```true```, the url of the version is stored as a key value.
