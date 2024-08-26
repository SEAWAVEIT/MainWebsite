// FollowButton.jsx

import React, { useState, useEffect } from 'react';

const FollowButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputRect, setInputRect] = useState(null);

  // Update position state based on mouse movement
  const updatePosition = (e) => {
    if (inputRect) {
      let newX = e.clientX - inputRect.left;
      let newY = e.clientY - inputRect.top;

      // Restrict movement within the bounds of the input container
      if (newX < 0) {
        newX = 0;
      } else if (newX > inputRect.width) {
        newX = inputRect.width;
      }
      if (newY < 0) {
        newY = 0;
      } else if (newY > inputRect.height) {
        newY = inputRect.height;
      }

      setPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById('input-container'); // Assuming you add id="input-container" to the input div
    if (inputElement) {
      setInputRect(inputElement.getBoundingClientRect());
    }

    document.addEventListener('mousemove', updatePosition);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [inputRect]); // Dependency array ensures effect runs when inputRect changes

  return (
    <div id="input-container" className="relative w-full">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={{ position: 'absolute', left: position.x, top: position.y, transition: 'left 0.15s ease-out, top 0.15s ease-out' }}
      >
        Follow Me!
      </button>
    </div>
  );
};

export default FollowButton;
