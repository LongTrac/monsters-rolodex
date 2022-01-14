import React from "react";
import './card-list.style.css';
import { Card } from "../card/card.component";

// a funtional component 
// this 'props' will be everything we pass in as parameters when we call this component
export const CardList = (props)=>(  

    // children of the prop will be anything in between the <CardList> and  the </CardList>
    <div className='card-list'>   
        {props.monsters.map( (monster) => (
            <Card key = {monster.id} monster = {monster} />
    ) )}
    </div>     
);