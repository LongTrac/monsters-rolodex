import React from "react";
import './card.styles.css';

export const Card = (props)=> (

    // console.log('monster number '+props.monstery.id+': ');
    
    <div className='card-container'>
        {/* because we are trying to use the jsx code in the src to change the id, we cannot use the normal src="" syntax instead we have to use src={``} */}
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}/>

        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);


