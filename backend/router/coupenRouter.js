import express from "express"
import { createCoupen, editCoupen } from "../controller/coupenController.js"


const coupenRouter= express.Router()

coupenRouter.post('/create',createCoupen)
coupenRouter.put('/edit/:id?',editCoupen)

export default coupenRouter