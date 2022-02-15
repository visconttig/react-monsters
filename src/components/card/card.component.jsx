import React from "react";
import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=140x140`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
)