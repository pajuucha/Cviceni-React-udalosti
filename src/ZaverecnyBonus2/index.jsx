import React from 'react';

// Zadání: Předstírejme, že na stránce je složitý formulář, do kterého uživatel možná pracně vyplnil nějaká data. Po kliku na odkaz se radši uživatele zeptej pomocí `confirm`, jestli chce opravdu odejít na jinou stránku a tím ztratit rozpracovanou práci. Pokud otázku nepotvrdí, zamez přesměrování pomocí `event.preventDefault()`.

export const ZaverecnyBonus2 = () => {
  const confirmRedirect = (event) => {
    if (
      !confirm(
        `Opravdu chcete přesměrovat na jinou stránku? Můžete tím ztratit neuložená data.`,
      )
    ) {
      event.preventDefault();
    }
  };
  return (
    <>
      Odkaz:{' '}
      <a href="https://www.czechitas.cz/" onClick={confirmRedirect}>
        www.czechitas.cz
      </a>
      <hr />
      Formulář:
      <form>
        <textarea
          rows={5}
          cols={60}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
        />
        <br />
        <button>uložit</button>
      </form>
    </>
  );
};

// 2.řešení
// export const ZaverecnyBonus2 = () => {
//   return (
//     <>
//       Odkaz:{' '}
//       <a
//         href="https://www.czechitas.cz/"
//         onClick={(event) => {
//           if (
//             !confirm(
//               'Opravdu chcete odejít na jinou stránku? Můžete přijít o rozpracovanou práci.',
//             )
//           ) {
//             event.preventDefault();
//           }
//         }}
//       >
//         www.czechitas.cz
//       </a>
//       <hr />
//       Formulář:
//       <form>
//         <textarea
//           rows={5}
//           cols={60}
//           defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
//         />
//         <br />
//         <button>uložit</button>
//       </form>
//     </>
//   );
// };
