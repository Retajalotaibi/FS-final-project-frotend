import React from 'react';
import Practice from './Practice';
import HangMan from "./imgs/8ef67ed295b743d781e2bbea6343cce3-512x512.jpeg";
import "./Practice.css"

const Practices = () => {
    return ( 
        <div className="practice-container">
            <div className="practice-cards">
                <Practice title="Play Hang Man" img={HangMan}/>
                <Practice title="Play Hang Man" img={HangMan}/>
                <Practice title="Play Hang Man" img={HangMan}/>
                <Practice title="Play Hang Man" img={HangMan}/>
            </div>
        </div>    
     );
}
 
export default Practices;