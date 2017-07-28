import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be five characters or more']
  }, 
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be eight characters or more']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean, 
    default: false
  }
});

const User = mongoose.model('User', userSchema);
export default User;

