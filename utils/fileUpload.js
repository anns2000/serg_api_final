
const multer=require("multer")

exports.uploadSingleFile = ()=>{
    const storage = multer.diskStorage({})
      
    const upload = multer({ storage: storage })
    return upload.single('photo');
}


exports.uploadSinglepdfFile = ()=>{
  // Import the required modules
  const multer = require('multer');

  // Set up multer for file upload
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the directory where you want to store the files
      cb(null, 'D:/node projects/serg_api_final/upload');
    },
    filename: function (req, file, cb) {
      // Use the original filename for the uploaded file
      cb(null, file.originalname);
    }
  });

  // Create the multer middleware with the specified storage
  const upload = multer({ storage: storage });
  // Return a function that combines Multer middleware and route handler
  return (req, res) => {
    // Use the Multer middleware to handle file upload
    upload.single('pdfFile')(req, res, (err) => {
      
      // Handle any Multer errore
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
      }

      // Check if a file was uploaded
      //if (!req.file) {
      //  return res.status(400).send('No file uploaded.');
      //}
      
      // Return a success response
      res.send('File uploaded successfully.');
    });
  };
}




exports.uploadFiles = () => {
    // Set up multer for file upload
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            // Specify the directory where you want to store the files
            if (file.fieldname === 'pdfFile') {
              cb(null, 'D:/node projects/serg_api_final/upload/pdf');
          } else if (file.fieldname === 'photo') {
              cb(null, '');
          } else {
              cb(new Error('Invalid field name'), null);
          }
        },
        filename: function (req, file, cb) {
            // Use the original filename for the uploaded file
            cb(null, file.originalname);
        }
    });

    // Create the multer middleware with the specified storage
    const upload = multer({ storage: storage });

    // Return the middleware function to handle file uploads for both fields
    return (req, res) => {
      upload.fields([{ name: 'pdfFile', maxCount: 1 }, { name: 'photo', maxCount: 1 }])(req, res, (err) => {
          if (err instanceof multer.MulterError) {
              return res.status(500).json({ error: err.message });
          } else if (err) {
              return res.status(500).json({ error: 'An unexpected error occurred.' });
          }

          if (!req.files || !req.files['pdfFile'] || !req.files['photo']) {
              return res.status(400).send('Both file and photo fields are required.');
          }

          // Access file and photo using req.files['file'][0] and req.files['photo'][0]

          res.send('File uploaded successfully.');
      });
  };
};
