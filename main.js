
const { uploadAny } = require('./utils/fileUpload');
const express = require('express');
const app = express();

// Route to handle file upload
app.post('/upload',uploadAny());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});















(req, res, (err) => {
  if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: err.message });
  } else if (err) {
      return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
  // Access PDF file using req.files['pdfFile'][0]
  req.body.file = req.file.originalname;
  console.log('--------------------------------');
});
