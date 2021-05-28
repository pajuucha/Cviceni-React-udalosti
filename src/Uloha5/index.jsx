import React from 'react';

// Zadání 1: Dopiš komponentu `NakupniPolozka`, aby v divu byl vypsaný název položky a tlačítko s textem „koupit“.
// Zadání 2: Po kliknutí na tlačítko vypiš do konzole „Uživatel chce koupit DOPLŇ_NÁZEV_POLOŽKY“.

export const NakupniPolozka = ({ nazev }) => {
  const handleClick = () => {
    console.log(`Uživatel chce koupit ${nazev}`);
  };
  return (
    <div>
      {nazev}
      <button onClick={handleClick}>koupit</button>
    </div>
  );
};

//2.řešení
// export const NakupniPolozka = ({ nazev }) => {
// 	return (
// 		<div>
// 			{nazev}{' '}
// 			<button onClick={() => console.log(`Uživatel chce koupit ${nazev}`)}>
// 				koupit
// 			</button>
// 		</div>
// 	)
// }

// Zadání 3: Pomocí `polozky.map` vypiš všechny názvy jako nákupní položky.

export const Uloha5 = () => {
  const polozky = ['hrušky', 'jablka', 'třešně', 'jahody'];

  return (
    <>
      {polozky.map((polozka) => (
        <NakupniPolozka nazev={polozka} key={polozka} />
      ))}
    </>
  );
};

//2.řešení
// export const Uloha5 = () => {
//   const polozky = ['hrušky', 'jablka', 'třešně', 'jahody'];

//   return polozky.map((polozka) => <NakupniPolozka nazev={polozka} />);
// };
