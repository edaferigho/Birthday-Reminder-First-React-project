import React from 'react';


function Birthday(props) {
    

    return (
        <div className="birthday">
            <div className="image">
                <img src={props.image} alt="" />
                </div>
            <div className="details">
                <p className="title">{props.name}</p>
            <p>{props.age} years</p>
            </div>
        </div>
    )
}
export default Birthday