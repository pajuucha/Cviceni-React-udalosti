import React from 'react';

// Zadání 1: Dopiš komponentu `Pozdrav`, aby v tlačítku byl text „Pozdrav DOPLŇ_JMÉNO_VE_ČTVRTÉM_PÁDĚ“.
// Zadání 2: Na klik zobraz bublinu s textem „Ahoj DOPLŇ_JMÉNO_V_PÁTÉM_PÁDĚ“.

const Ahoj = ({ jmenoVeTretimPade, jmenoVPatemPade }) => {
  const handleClick = () => {
    alert(`Ahoj ${jmenoVPatemPade}!`);
  };
  return <button onClick={handleClick}>Řekni 'ahoj' {jmenoVeTretimPade}</button>;
};

// // Zadání 3: Do komponenty `Uloha4` přidej ještě dvě použití komponenty `Pozdrav`. Jednou s tvým jménem a jednou se jménem kouče.

export const Uloha4 = () => {
  return (
    <>
      <Ahoj jmenoVeTretimPade="Martinovi" jmenoVPatemPade="Martine" />
      <Ahoj jmenoVeTretimPade="Pavle" jmenoVPatemPade="Pavlo" />
      <Ahoj jmenoVeTretimPade="Aničce" jmenoVPatemPade="Aničko" />
    </>
  );
};
