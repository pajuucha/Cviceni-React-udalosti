import React from 'react';
import hradUrl from './hrad.svg';

// Zadání: Po najetí myši, `onMouseEnter` na obrázek zobraz bublinu s textem „Na hradě je myš!“

export const Uloha2 = () => {
  const mouse = () => {
    alert('Na hradě je myš');
  };
  return (
    <img src={hradUrl} width={60} height={60} alt="hrad" onMouseEnter={mouse} />
  );
};
