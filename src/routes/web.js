import express from 'express';
import { handleCreateUser, handlehelloWorld, handleUserPage } from '../controllers/homeController';

const router = express.Router();

/**
 *
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
  router.get('/', handlehelloWorld);
  router.get('/users', handleUserPage);
  router.post('/users/create-user', handleCreateUser);
  router.get('/', (req, res) => {
    return res.send('Hello, world!');
  });

  return app.use('/', router);
};

export default initWebRoutes;
