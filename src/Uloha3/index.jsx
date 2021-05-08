import React from 'react'

// Zadání: Dopiš komponentu tak, aby každé tlačítko po kliknutí vypsalo, jakou volbu uživatel vybral. Například pro poslední `console.log('Uživatel zvolil zimu')`.

export const Uloha3 = () => {
	return (
		<>
			Které roční období je ve střední Evropě nejteplejší?
			<ol>
				<li>
					<button>jaro</button>
				</li>
				<li>
					<button>léto</button>
				</li>
				<li>
					<button>podzim</button>
				</li>
				<li>
					<button>zima</button>
				</li>
			</ol>
		</>
	)
}
