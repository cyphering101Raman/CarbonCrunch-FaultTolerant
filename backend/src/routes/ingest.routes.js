import {Router} from "express";

import { ingestData } from "../controllers/ingest.controller.js";

const route = Router();

route.post("/ingest", ingestData);

export default route;