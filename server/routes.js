import express from 'express';

// Route imports
import rootController from './controllers/rootController';

const route = express();

route.get('/', rootController.get);

export default route;
