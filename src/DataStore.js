import React from "react";
import './index.css';

class DataStore extends React.Component {

    constructor() {
        super();
        this._books = [];

        this.loadBooks = this.loadBooks.bind(this);
        this.getAllBooks = this.loadBooks.bind(this);
    }

    loadBooks() {
        // fetch in here
    }

    getAllBooks() {
        // return full collection
    }

    Books(props) {
        return <p>{props.name}</p>
    }

    render() {
        return(
            <div>
                This is meeee
                <Books name="Willy Wonka" />
            </div>
        );
    }

}

export default DataStore;