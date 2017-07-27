import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './server/routes';

const dbPromise = mongoose.connect('mongodb://localhost:27017/redditclone', {
  useMongoClient: true
});

dbPromise.then(() => {
  console.log('Connected to db');
});

const app = express();

//Middleware

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

