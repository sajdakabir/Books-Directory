const express=require('express');
const bookRouter=express.Router();


bookRouter
.route('/addBook')
.post(addBook)

bookRouter
.route('/:id')
.get(getBook)
.patch(updateBookInfo)
.delete(deleteBookInfo)

bookRouter
.route('/')
.get(getAllBooks)