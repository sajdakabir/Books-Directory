const bookModel = require('../models/bookModel');


module.exports.addBookInfo = async function addBookInfo(req, res) {
    try {
        const dataObj = req.body;
        const book = await bookModel.create(dataObj);
        if (book) {
            return res.json({
                message: 'book information added succfully',
                result:book
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

module.exports.deleteBookInfo = function deleteBookInfo(req, res) {

}
module.exports.getAllBooks = function getAllBooks(req, res) {

}