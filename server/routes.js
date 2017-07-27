import express from 'express';

// Route imports
import rootController from './controllers/rootController';
import userController from './controllers/userController';

const routes = express();

routes.get('/', rootController.get);
routes.post('/signup', userController.post);

export default routes;
