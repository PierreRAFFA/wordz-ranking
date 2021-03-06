import { Request, Response, Router } from "express";

import * as gameController from './controllers/gameController';
import * as rankingController from './controllers/rankingController';
import { accessControl } from "./middlewares/accessControl";

const routes: Router = require('express').Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server running successfully');
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// HEALTHCHECK
routes.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('');
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// EXAMPLE

// routes.get("/games/:id", gameController.getById);
routes.get("/games", accessControl, gameController.read);
routes.post("/games", accessControl, gameController.create);
routes.put("/games/:id", accessControl, gameController.update);

routes.get("/rankings/:language/overall", accessControl, rankingController.readOverall);
routes.get("/rankings/:language/current", accessControl, rankingController.readCurrent);
routes.get("/rankings/:language/:reference", accessControl, rankingController.readFromReference);
// routes.put("/games/:id", gameController.put);
// routes.delete("/games/:id", gameController.del);
// routes.patch("/games/:id", gameController.patch);

export default routes;
