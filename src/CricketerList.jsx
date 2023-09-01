import React, { useState } from 'react';
import { cricketers } from './data.jsx';
import './CricketerList.css';
import Card from './Card.jsx';

const CricketerList = () => {
  const [selectedCricketer, setSelectedCricketer] = useState(null);
  const [imageClicked, setImageClicked] = useState(false);

  const handleCricketerClick = (cricketer) => {
    setSelectedCricketer(cricketer);
    setImageClicked(true)
  };

  const closeModal = () => {
    setSelectedCricketer(null);
    setImageClicked(false)
  };

  const handleStarClick = (cricketer, selectedRating) => {
    cricketer.rating = selectedRating; // Update the cricketer's rating
    setSelectedCricketer({ ...cricketer }); // Trigger a re-render for the modal
  };

  return (
    <>
      <div className='images-container'>
        {cricketers.map((cricketer) => (
          <div key={cricketer.id} className='cricketer-card'>
            <img
              className='cricketer-image'
              src={cricketer.src}
              alt={cricketer.name}
              onClick={() => handleCricketerClick(cricketer)}
            />
            <p className='cricketer-name'>{cricketer.name}</p>

            <div className='rating'>
              {[1, 2, 3, 4, 5].map((star, index) => (
                <span
                  key={index}
                  className={`star ${cricketer.rating >= star ? 'colored' : ''}`}
                  onClick={() => handleStarClick(cricketer, star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedCricketer && imageClicked && (
        <div className='modal-overlay'>
          <Card
            name={selectedCricketer.name}
            src={selectedCricketer.src}
            score={selectedCricketer.runs}
            average={selectedCricketer.average}
            centuries={selectedCricketer.centuries}
            fifties={selectedCricketer.fifties}
            bestScore={selectedCricketer.bestScore}
            onClose={closeModal}
            rating={selectedCricketer.rating}
          />
        </div>
      )}
    </>
  );
};

export default CricketerList;
