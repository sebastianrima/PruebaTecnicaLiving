//imports
import express from "express";
import {get} from "../Controllers/DataController.js"

//router
const router = express.Router();

//routes
router.route("/").get(get);

export default router;