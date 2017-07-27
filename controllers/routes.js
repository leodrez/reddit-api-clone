import express from 'express';

// Route imports
import rootController from './rootController';

const route = express();

route.get('/', rootController.get);

export default route;
