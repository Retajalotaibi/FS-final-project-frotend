import React from 'react';

const Practice = (props) => {
    return ( 
        <div className="practice-card">
            <img src={props.img} alt={props.title}/>
            <h2 className="card-title">{props.title}</h2>
        </div>    
     );
}
 
export default Practice;