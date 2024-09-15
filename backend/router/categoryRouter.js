import express from 'express'
import { createCategory, deleteCategory, EditCategory, getCategory } from '../controller/categoryController.js'
import {  verifyToken } from '../middleware/jwt.js'
import { isAdmin } from '../middleware/authMiddleware.js'

const categoryRouter= express.Router()

categoryRouter.post('/create',verifyToken,isAdmin,createCategory)
categoryRouter.post('/edit/:id',verifyToken,isAdmin,EditCategory)
categoryRouter.post('/delete/:id?',verifyToken,isAdmin,deleteCategory)
categoryRouter.get('/:id?',getCategory)


export default categoryRouter