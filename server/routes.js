import express from 'express';

// Route imports
import rootController from './controllers/rootController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// Root routes
routes.get('/', rootController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/post', postController.post);

export default routes;
