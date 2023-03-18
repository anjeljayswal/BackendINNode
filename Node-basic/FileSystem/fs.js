// file system CRUD(create, read, updated, delete) 

const fs = require('fs');

const fsPromise = require("fs/promises");


/*
working with directories
// fs.mkdir('../new', (err) =>{
//     console.log(err);
// })
 /* console.log('start');
fs.mkdir("myDir/anjali", {recursive: true}, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("createde successfully");
    }
});

// syncronous excution of mkdir 
fs.mkdirSync('my');

console.log('end');
*/

// fs.readdir('FileSystem', (e, files) =>{
//     if(e){
//         console.log(`error occured: ${e.message}`);

//     }else{
//         console.log('getting files here');
//         console.log(files);
//     }
// })
/*
fs.rmdir('FileSystem/my', (err) =>{
    if(err){
        console.log(`error occured: ${err.message}`);
    }else{
        console.log('deleted successfully');
    }
})

*/

// end of directories

/*
// CRUD on files 
// while replacing me with anjali , 
// if file is not there it will create one  , and then write the content
// if file is there it will overwrite the content in that file
fs.writeFile('FileSystem/myFile.txt', 'hi this is Anjali', (err) =>{
    if(err){
        console.log(`erro occured: ${err.message}`);
    }
})

fs.appendFile('FileSystem/File.txt', '\nHi this is line number 1', (err) =>{
    if(err){
        console.log(`error occured: ${err.message}`);
    }else{
        console.log('file appended successfully');
    }
})



//open
fs.open('FileSystem/File.txt', 'r', (err, file) =>{
    if(err){
        console.log(`error occured: ${err.message}`);
    }else{
        console.log(file);
        console.log('file appended asuccessfylly');
    }
})


// read
fs.readFile('FileSystem/File.txt','utf-8', (err, file) =>{
    if(err){
        console.log(`error occured: ${err.message}`);
    }else{
        // console.log(file+'');
        console.log(file);
        console.log('file appended asuccessfylly');
    }
})

//delete
fs.unlink('FileSystem/File', (err) =>{
    if(err){
        console.log(`error occured: ${err.message}`);
    }
    else{
        console.log('file deleted asuccessfylly');
    
    }
})

const deleteFile = async()=>{
    await fsPromise.unlink('FileSystem/myf.js');
}
deleteFile();


(function(){

})()
*/

// const myFileWriter = (filename, content) =>{
//     fs.writeFile(filename, content, (err)=>{
//         if(err){
//             console.log('err');
//         }
//     })
// }


//question 
const myFileWriter = async(filename, content) => {
    await fsPromise.writeFile(filename, content)
}

const myFileReader = async(filename) => {
    await fsPromise.readFile(filename)
}
const myFileUpdater = async(filename, content) => {
    await fsPromise.appendFile(filename, content)
}

const myFileDelete = async(filename) => {
    await fsPromise.unlink(filename)
}





// fetch('https://myapi.com')
// .then((data) => {
// })
// .catch(() =>{
// })


// const callmyAPI = async() => {
//     await fetch('https://myapi.com')
// }

