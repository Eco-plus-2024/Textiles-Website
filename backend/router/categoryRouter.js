import express from 'express'
import { createCategory, deleteCategory, EditCategory, getCategory } from '../controller/categoryController.js'

const categoryRouter= express.Router()

categoryRouter.post('/create',createCategory)
categoryRouter.post('/edit/:id',EditCategory)
categoryRouter.post('/delete/:id?',deleteCategory)
categoryRouter.get('/:id?',getCategory   )


export default categoryRouter