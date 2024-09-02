import express from "express";
import { createBanner } from "../controller/bannerController.js";

const bannerRouter= express.Router()

bannerRouter.post('/create',createBanner)

export default bannerRouter