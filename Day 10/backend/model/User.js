import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Email minimum 3 karakter'],
      maxLength: [255, 'Email maksimum 255 karakter'],
      required: [true, 'Email wajib diisi'],
    },
    email: {
      type: String,
      minLength: [3, 'User minimum 3 karakter'],
      maxLength: [255, 'User maksimum 255 karakter'],
      required: [true, 'User wajib diisi'],
    },
    password: {
      type: String,
      minLength: [3, 'Password minimum 3 karakter'],
      maxLength: [255, 'Password maksimum 255 karakter'],
      required: [true, 'Password wajib diisi'],
    },
  },
  { timeStamp: true }
);

export default mongoose.model('User', User);
