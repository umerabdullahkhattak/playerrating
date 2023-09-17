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
      <div className='flex items-center flex-wrap justify-center'>
        {cricketers.map((cricketer) => (
          <div key={cricketer.id} className='w-1/6 h-64 m-10 bg-slate-300 rounded
           shadow-stone-200 items-center justify-center'>
            <img
              className='block w-full h-5/6 object-cover rounded items-center'
              src={cricketer.src}
              alt={cricketer.name}
              onClick={() => handleCricketerClick(cricketer)}
            />
            <p className='text-center font-medium'>{cricketer.name}</p>

            <div className='flex text-center justify-center bg-slate-50 p-1'>
              {[1, 2, 3, 4, 5].map((star, index) => (
                <span
                  key={index}
                  className={`text-xl cursor-pointer text-slate-400 ${cricketer.rating >= star ? 'cursor-pointer text-yellow-500 text-2xl' : ''}`}
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
        <div className='fixed top-0 left-0 w-full h-full bg-yellow-100 flex justify-center align-middle z-1000'>
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
