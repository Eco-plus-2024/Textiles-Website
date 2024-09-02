import express from "express";
import { createBrand, deleteBrand, editBrand, getBrand } from "../controller/brandController.js";

const brandRouter= express.Router()

brandRouter.post('/create',createBrand)
brandRouter.post('/edit/:id?',editBrand)
brandRouter.post('/delete/:id?',deleteBrand)
brandRouter.get('/get/:id?',getBrand)

export default brandRouter