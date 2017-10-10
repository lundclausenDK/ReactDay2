import React from "react";
import './App.css';

class Resource extends React.Component {


    callKoalas() {
        let koalas = ["img/koala01.jpg", "img/koala02.jpg", "img/koala03.jpg"];

        let koalaLoop = koalas.map(image => {
            return <img key={image} src={image} className="koalas"/>
        });

        return koalaLoop;
    }

    render() {
        return (
            <div>
                <h1>Hello, this is our new Resources class</h1>

                {this.callKoalas()}


            </div>
        );

    }
}

export default Resource;