import express from 'express';

import route from './server/routes';

const app = express();

app.use('/api', route);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

