import express from "express";
import { createBanner, deleteBanner, editBanner, getBanner } from "../controller/bannerController.js";

const bannerRouter= express.Router()

bannerRouter.post('/create',createBanner)
bannerRouter.post('/edit/:id?',editBanner)
bannerRouter.delete('/delete/:id?',deleteBanner)
bannerRouter.get('/get/:id?',getBanner)

export default bannerRouter