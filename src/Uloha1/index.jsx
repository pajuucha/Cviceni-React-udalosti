import React from 'react';

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.


export const Uloha1 = () => {
  const handleClick = () => {
    alert('Čau');
  }
	return <button onClick={handleClick}>Ukaž bublinu</button>
}