import express from "express"
import { createCoupen, deleteCoupen, editCoupen, getCoupen } from "../controller/coupenController.js"


const coupenRouter= express.Router()

coupenRouter.post('/create',createCoupen)
coupenRouter.put('/edit/:id?',editCoupen)
coupenRouter.delete('/delete/:id?',deleteCoupen)
coupenRouter.get('/:id?',getCoupen)

export default coupenRouter