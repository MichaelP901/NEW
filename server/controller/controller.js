var Book = require('../model/model');

// Create and save new book
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    // New book
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });

    // Save book in the database
    book
        .save()
        .then(data => {
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
};

// Retrieve and return all books / retrieve and return a single book
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Book.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found book with id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving book with id " + id });
            });

    } else {
        Book.find()
            .then(books => {
                res.send(books);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving book information" });
            });
    }
};

// Update an identified book by book id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" });
    }

    const id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update book with id ${id}. Maybe book not found!` });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating book information" });
        });
};

// Delete a book with specified book id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Book.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete book with id ${id}. Maybe id is wrong` });
            } else {
                res.send({
                    message: "Book was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete book with id=" + id
            });
        });
};