import express from 'express';

// Route imports
import rootController from './controllers/rootController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// Root routes
routes.get('/', rootController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// Comment routes
routes.post('/comment', commentController.post);


export default routes;
