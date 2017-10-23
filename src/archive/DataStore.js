import React from "react";
import '../index.css';

class DataStore extends React.Component {

    constructor() {
        super();
        this.state = {books: []};


        this.loadBooks = this.loadBooks.bind(this);
        this.getAllBooks = this.loadBooks.bind(this);

        this.loadBooks(function (data) {
            this.setState({books: data});
        }.bind(this));
    }

    loadBooks(callback) {
        const url = "http://localhost:4000/books";
        const conf = {method: "get"};
        const promise = fetch(url, conf);


        promise.then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            callback(data);
        });

    }

    createBook(book, callback) {
        fetch(URL, {
                method: "POST",
                headers: new Headers({"content-Type": "application/json"}),
                body: JSON.stringify(book)
            }
        ).then(function (data) {
            return data.json();
        }).then(function (data) {
            //callback(data);
            this.loadBooks(callback(data));
        });


    }

    render() {

        const books = this.state.books.map(function (book) {
            return <div key={book.id}>{book.author}</div>
        });

        return (
            <div>{books}</div>
        );
    }

}

export default DataStore;