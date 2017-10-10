import React from "react";
import './index.css';

class Gallery extends React.Component {


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
                <h1>Hello, this is our new Gallery class</h1>

                {this.callKoalas()}


            </div>
        );

    }
}

export default Gallery;