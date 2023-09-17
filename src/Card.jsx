import React, { useState } from 'react';
import './card.css';
import { cricketers} from './data.jsx'; 
export default function Card(props) {
    const [rating, setRating] = useState(0);
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating === rating ? 0 : selectedRating);
      };
    return (
        <>
         <>
      

        <div className='w-1/6 h-3/6 border-2 border-yellow-200 rounded-md shadow-md overflow-hidden'>
        <button className="font-semibold relative" onClick={props.onClose}>
        Close
      </button>
        <div className='card-image'>
            <img  src={props.src}
            alt={props.name}
            />
            
        </div>
        <div className='card-data'>
        <div className='headings'>
                <h3>Score</h3>
                <h3>Average</h3>
                <h3>Centuries</h3>
                <h3>Fiftties</h3>
                <h3>Best Score</h3>
            </div>
            <div className='values'>
                <h3>{props.score}</h3>
                <h3>{props.average}</h3>
                <h3>{props.centuries}</h3>
                <h3>{props.fifties}</h3>
                <h3>{props.bestScore}</h3>
                
            </div>  
             
        </div>
        {/* <div className="rating">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span
              key={index}
              className={`star ${rating >= star ? 'colored' : ''}`}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div> */}
        </div>
      </>
        </>

        
    )
}