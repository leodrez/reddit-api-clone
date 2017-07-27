import express from 'express';
import mongoose from 'mongoose';

import route from './server/routes';

const dbPromise = mongoose.connect('mongodb://localhost:27017/redditclone', {
  useMongoClient: true
});

dbPromise.then((db) => {
  console.log('Connected to db');
});

const app = express();

app.use('/api', route);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

