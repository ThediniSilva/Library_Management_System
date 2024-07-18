import mongoose from 'mongoose';

const eBookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  pdfPath: { type: String, required: true }
});

export const eBook = mongoose.model('eBook', eBookSchema);
