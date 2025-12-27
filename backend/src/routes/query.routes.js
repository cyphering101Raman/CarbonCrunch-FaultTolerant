import { Router } from "express";
import { fetchAggregates } from "../controllers/query.controller.js";

const route = Router();

route.get("/aggregate", fetchAggregates);

export default route;
