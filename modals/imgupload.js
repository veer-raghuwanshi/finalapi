var multer = require('multer')
/*
Returns a StorageEngine implementation configured to store files on the local file system.
A string or function may be specified to determine the destination directory, and a function to determine filenames. If no options are set, files will be stored in the system's temporary directory with random 32 character filenames.
*/
var storage_engine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

/*
destination is used to determine within which folder the uploaded files should be stored. This can also be given as a string (e.g. '/tmp/uploads'). If no destination is given, the operating system’s default directory for temporary files is used.

filename is used to determine what the file should be named inside the folder. If no filename is given, each file will be given a random name that doesn’t include any file extension.
*/
/*
Returns a Multer instance(object) that provides several methods for generating middleware that process files uploaded in multipart/form-data format.
*/
let imgupload = multer({ storage: storage_engine })
module.exports = imgupload