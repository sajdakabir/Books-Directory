const express=require('express');
const bookRouter=express.Router();
const { model } = require('mongoose');
const {addBookInfo,getBook,getAllBooks,updateBookInfo,deleteBookInfo}=require('../controllers/bookControllers');

bookRouter
.route('/addBook')
.post(addBookInfo)

bookRouter
.route('/:id')
.get(getBook)
.patch(updateBookInfo)
.delete(deleteBookInfo)

bookRouter
.route('/')
.get(getAllBooks)


module.exports=bookRouter;