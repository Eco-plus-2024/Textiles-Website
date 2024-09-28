import express from "express";
import { newsLetterCreate, newsLetterDelete, newsLetterGet } from "../controller/newsLetterController.js";

const newsLetterRouter=express.Router()

newsLetterRouter.post('/create',newsLetterCreate)
newsLetterRouter.get('/:id?',newsLetterGet)
newsLetterRouter.delete('/delete/:id?',newsLetterDelete)

export default newsLetterRouter