// const path = require('path');
// console.log(path);


// here dirname is method 
// const dirName = path.dirname("C:\d\java\Backend\export-import\info.js");
// console.log('dirName', dirName);

const {basename, dirname, extname, join,isAbsolute} = require('path');

// const pathDirname = dirname("C:/d/java/Backend/export-import/info.js");
// console.log('dirName', pathDirname);

// const pathfileName = basename("C:/d/java/Backend/export-import/info.js");
// console.log('pathfileName', pathfileName);

// const pathfileNamewithOutExt = basename("C:/d/java/Backend/export-import/info.js",'.js');
// console.log('pathfileNamewithOutExt', pathfileNamewithOutExt);

// const pathfileExt = extname("C:/d/java/Backend/export-import/info.js");
// console.log('pathfileExt', pathfileExt);


const rootPath = "C:/d/java/Backend";

const infoJSPath = join(rootPath, "export-import/info.js");

// const BeImagePath = join(rootPath, "Images/eventLoop.png")
// console.log('infoJSPath', infoJSPath);
// console.log('BeImagePath', BeImagePath);


const isPathAbsolute = isAbsolute(rootPath);
console.log("isPathAbsolute", isPathAbsolute);


// const {} = require('../export-import/info');  //relative path

// C:\d\java\Backend\export-import\info.js // absolute path 


// values 
// const a=100;
// const b=20;
// const c=a+20 //30