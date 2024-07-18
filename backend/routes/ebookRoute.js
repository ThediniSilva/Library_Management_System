import express from 'express';
import multer from 'multer';
import path from 'path';
import { eBook } from '../models/ebook.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route to upload an eBook (Create)
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { name, author } = req.body;
    const pdfPath = req.file.path;

    const newEBook = new eBook({ name, author, pdfPath });
    await newEBook.save();

    res.status(201).json({ message: 'eBook uploaded successfully', eBook: newEBook });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload eBook' });
  }
});

// Route to get all eBooks
router.get('/', async (req, res) => {
  try {
      const eBooks = await eBook.find();
      res.status(200).json(eBooks);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve all eBooks' });
  }
});

// Route to get a single eBook by ID
router.get('/:id', async (req, res) => {
  try {
    const foundEBook = await eBook.findById(req.params.id);

    if (!foundEBook) {
      return res.status(404).json({ error: 'eBook not found' });
    }

    res.status(200).json(foundEBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve e-Book..' });
  }
});

// Route to update an eBook by ID (Update)
router.put('/:id', upload.single('pdf'), async (req, res) => {
  try {
    const { name, author } = req.body;
    let pdfPath;

    if (req.file) {
      pdfPath = req.file.path;
    }

    const updatedData = { name, author, pdfPath };
    const updatedEBook = await eBook.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!updatedEBook) {
      return res.status(404).json({ error: 'eBook not found' });
    }

    res.status(200).json({ message: 'eBook updated successfully', eBook: updatedEBook });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update eBook' });
  }
});

// Route to delete an eBook by ID (Delete)
router.delete('/:id', async (req, res) => {
  try {
    const deletedEBook = await eBook.findByIdAndDelete(req.params.id);

    if (!deletedEBook) {
      return res.status(404).json({ error: 'eBook not found' });
    }

    res.status(200).json({ message: 'eBook deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete eBook' });
  }
});

// Route to download an eBook
router.get('/download/:id', async (req, res) => {
  try {
    const eBook = await eBook.findById(req.params.id);

    if (!eBook) {
      return res.status(404).json({ error: 'eBook not found' });
    }

    res.download(eBook.pdfPath);
  } catch (error) {
    res.status(500).json({ error: 'Failed to download eBook' });
  }
});

export default router;
