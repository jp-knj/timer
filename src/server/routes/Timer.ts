import * as express from 'express';
import { measureTimer } from '../controller/timers';
const router = express.Router();

router
  .route('/')
  .post();

export default router;
