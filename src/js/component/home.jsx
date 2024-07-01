import React, { useState } from "react";


const Home = () => {
	const [table, setTable] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	]);


	const [turn, setTurn] = useState("X");
	const [won, setWon] = useState(false);
	const changeTurn = () => setTurn(turn === "O" ? "X" : "O");


	const setValue = (i, j) => {
		if (
			typeof table[i][j] === "undefined") {
			const aux = [...table];
			aux[i][j] = turn;
			setTable(aux);
			checkWinner();
			changeTurn();

		}
		else {
			alert("!Este espacio está ocupado! intenta con otro lugar")
		}
	};

	const checkWinner = () => {
		table.forEach((row, i) =>
			row.forEach((col, j) => {
				if (
					typeof table[i][j] != "undefined" &&
					j > 0 && j < 2 &&
					table[i][j] == table[i][j + 1] &&
					table[i][j] == table[i][j - 1]
				) {
					console.log("ganaste")
					setWon(true)
					setWinner(turn);
					return;
				}
				if (
					typeof table[i][j] != "undefined" &&
					i > 0 && i < 2 &&
					table[i][j] == table[i + 1][j] &&
					table[i][j] == table[i - 1][j]
				) {
					console.log("ganaste")
					setWon(true)
					setWinner(turn);
					return;
				}
				if (
					typeof table[1][1] != "undefined" &&
					table[0][0] == table[1][1] &&
					table[0][0] == table[2][2]
				) {
					console.log("ganaste")
					setWon(true)
					setWinner(turn);
					return;
				}
				if (
					typeof table[1][1] != "undefined" &&
					table[0][2] == table[1][1] &&
					table[0][2] == table[2][0]
				) {
					console.log("ganaste")
					setWon(true);
					setWinner(turn);
					return;
				}
			})
		)
	}

	const reset = () => {
		setTable([
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined]
		])
		setWon(false);
		setWinner(turn);
	}
	return (
		<div className="text-center d-flex flex-column w-50 mx-auto my-5">

			<h1 className="my-5">Tu turno, {turn}</h1>
			<h2 className={won ? "show" : "hide"}>!Felicidades {turn}, ganaste!</h2>

			<table className="my-5">
				<tbody>
					{table.map((row, i) => (
						<tr key={i}>
							{row.map((col, j) => (
								<td key={j} onClick={() => setValue(i, j)}>
									<div className="item">
										{col}
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<button className="btn btn-primary" onClick={reset}>Juega nuevamente</button>
		</div>
	);
};

export default Home;
