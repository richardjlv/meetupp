import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SessionController from './app/controllers/SessionController';
import SubscriberController from './app/controllers/SubscriberController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/meetups', MeetupController.store);
routes.put('/meetups/:meetup_id', MeetupController.update);
routes.delete('/meetups/:meetup_id', MeetupController.delete);
routes.get('/meetups', MeetupController.index);

routes.get('/subscriptions', SubscriberController.index);
routes.post('/subscriptions', SubscriberController.store);

export default routes;
