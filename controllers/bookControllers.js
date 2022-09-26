const bookModel = require('../models/bookModel');


module.exports.addBookInfo = async function addBookInfo(req, res) {
    try {
        const dataObj = req.body;
        const book = await bookModel.create(dataObj);
        if (book) {
            return res.json({
                message: 'book information added succfully',
                result: book
            });

        } else {
            res.json({
                message: 'error while adding book information'
            })
        }
    } catch (err) {
        res.json({
            message: err.message
        });
    }

}

module.exports.getBook = async function getBook(req, res) {
    try {
        const id = req.params.id;
        const book = await bookModel.findById(id);
        if (book) {
            return res.json({
                message: 'data recived succfully',
                result: book
            });
        } else {
            return res.json({
                message: "book not found"
            })
        }
    } catch (err) {
        res.json({
            message: err.message
        });
    }
}

module.exports.updateBookInfo = function updateBookInf(req, res) {

}

module.exports.deleteBookInfo = async function deleteBookInfo(req, res) {
    try {
        const id = req.params.id;
        const book = await bookModel.findByIdAndDelete(id);
        if (!book) {
            res.json({
                message: 'book not found'
            });
        } else {
            res.json({
                message: 'book has been deleted from database',
                result: book
            });
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }


}
module.exports.getAllBooks = async function getAllBooks(req, res) {
    try {
        const books = await bookModel.find();
        if (books) {
            res.json({
                message: 'books received',
                result: books
            });
        } else {
            res.json({
                message: 'error while getting all book information'
            })
        }
    } catch (err) {
        res.json({
            message: err.message
        })
    }

}