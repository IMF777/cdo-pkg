# PKG

PKG is a code.org AppLab project for importing libraries or frameworks, called packages. Each package is stored on github, and imported via requests to raw.githubusercontent.com using ```startWebRequest()```. Upon recieval, package is then evaluated and returned.

## The problem with cdo libraries

Code.org does allow the export and import of libraries, but with restrictions. Libraries are imported via a unique library ID, and cannot be published to the public. Moreover, there is a specific size limit for each library, and once it exceeds the limit it is no longer publishable. The solution is to create multiple libraries stemming from the same framework and somehow connect them.

However, this creates a disorganized project space with lots of otherwise unneccessary libraries. Furthermore, it's painstaking to copy-paste library IDs and wait for the browser to refresh per each library import. This problem is emphasized when each project needs the same essential libraries and the process needs to be repeated.

## About http requests

High on the list of code.org's limitations is the inability to make http requests. If it was possible to recieve data from GET requests, .js files could be requested and evaled, ending the library problem.

Several workarounds have been created to bypass this limitation, such as requesting and decoding data through the use of images, or using another source to do the requests for you.

However, there is an EASY workaround to store and get files.

## The workaround

AppLab has a function called ```startWebRequest``` that makes an http request to the url given as paramater, and returns the content recieved. Unfortunately, it's not possible to access every site and only a few domains are authorized.

Many domains listed as authorized in the documentation, are not actually accessible when calling the function. The actual list of allowed domains is returned as the content in the case of an unauthorized domain being requested.


On this list, I found the domain api.github.com, which returns github repository data, and this is what gave me the idea. I created a repository to store .js files, and used startWebRequest to make api calls to the file. The file contents are encoded in base64, however, and after much pain and research I made a function that decoded base64 into utf8.

After that, I started making the PKG library. My initial version was designed to support package versioning logic (SemVer), dependencies, package store and more such features. I made good progress, but got stuck in the process of writing dependency logic. I kind of lost interest in PKG then, and the library stayed untouched for a while.

Months later, after seeing PKG in my projects, I started recreating with a new structure from scratch. This time, I was more realistic than the previous attempt. I decided version logic was largely unneccessary for AppLab. 
