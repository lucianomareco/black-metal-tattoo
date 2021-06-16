import React from 'react';
import '../assets/styles/components/TattooerCard.scss';


const TattooerCard = ({Avatar}) => {

    return(
        <article className="tattooerCard">
            <div className="row">
                <div className="col-12 col-md-6 image-container">
                    <img src={Avatar}></img>
                </div>
                <div className="col-12 col-md-6">
                    <h1>AGUSTIN ORTEGA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugit vel, sequi praesentium odit, perferendis architecto dolores ipsam, repellat facilis a. Explicabo error consequuntur, eum nemo mollitia aperiam placeat fuga.</p>
                </div>
            </div>
        </article>
    );
}

export default TattooerCard;