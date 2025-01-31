import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController'
import { SurveyRepository } from './repositories/SurveyRepository';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);
router.post("/survey", surveyController.create);
router.get("/survey", surveyController.show);

router.post("/sendmail", sendMailController.execute);
export { router };