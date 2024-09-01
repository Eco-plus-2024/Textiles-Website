import express from "express";
import { createBrand, deleteBrand, editBrand } from "../controller/brandController.js";

const brandRouter= express.Router()

brandRouter.post('/create',createBrand)
brandRouter.post('/edit/:id?',editBrand)
brandRouter.post('/delete',deleteBrand)

export default brandRouter