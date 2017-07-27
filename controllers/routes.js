import express from 'express';

const route = express();

route.get('/', (req, res) => {
  res.json({
    message: 'working' 
  });
});

export default route;
