import React from "react";
import { useState } from "react";
import SquareButton from './SquareButton'


export default function Grid() {

	let isPlayer1 = true;
	let isPlayer1Win = false;
	let isDraw = false;
	let stringBuffer = "";
	let turn = 0;
	const gridValues: string[] = [];

	const [startGame, setStartGame] = useState(false)
	const start = () => setStartGame(true)

	const [value, setValue] = useState("");
	const updateValue = (val: string) => {
		setValue(val);
	}


	function isEven(num: number): boolean {
		return num % 2 === 0;
	}


	function GameLogic(turn: number, value: string, id: number) {

		if (turn !== 0 && !isEven(turn)) {
			isPlayer1 = false;
		}

		gridValues[id] = value;


		console.log("isPlayer", isPlayer1);
		console.log("Game logic is running");
		// Conditions to determine the winner
		// Checking if palyer 1 wins
		// Linea \
		if (gridValues[0] === "X" && gridValues[0] === gridValues[4] && gridValues[4] === gridValues[8])
			isPlayer1Win = true;

		if (gridValues[1] === "X" && gridValues[1] === gridValues[4] && gridValues[4] === gridValues[7])
			isPlayer1Win = true;

		if (gridValues[3] === "X" && gridValues[3] === gridValues[4] && gridValues[4] === gridValues[5])
			isPlayer1Win = true;

		if (gridValues[6] === "X" && gridValues[6] === gridValues[4] && gridValues[4] === gridValues[2])
			isPlayer1Win = true;

		// Check if draw (do all squares have a value?)
		for (let index = 0; index < 9; index++) {
			console.log("HELLO33333", stringBuffer);
			const element = gridValues[index];
			if (stringBuffer === "111111111")
				return isDraw = true;
			if (element === "X" || element === "O") {
				stringBuffer.concat("1");
				console.log("HELLO$$$$", stringBuffer);
			}
		}

		// if isDraw = false && isPlayer1Win = false => player 2 wins
	}


	// Call two functions at button click
	function doStuff(turn: number, value: string, id: number) {
		start();
		console.log("TURN", turn);
		GameLogic(turn, value, id);
		return turn + 1;
	}

	const TrisGrid = () => {
		return (
			<>
				<div>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={0}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={1}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={2}></SquareButton>
				</div>
				<div>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={3}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={4}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={5}></SquareButton>
				</div>
				<div>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={6}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={7}></SquareButton>
					<SquareButton player1={isPlayer1} updateValue={updateValue} id={8}></SquareButton>
				</div>
			</>
		);

	}


	return (
		<>
			<h1 className="title-game">Game</h1>
			<button
				className="start-game"
				onClick={() => doStuff(turn, value, id)}
			>Start Game</button>
			<h3>{turn}</h3>
			{startGame ? <TrisGrid /> : null}
			{isPlayer1Win ? <h2>Player 1 wins!</h2> : null}
			{isDraw ? <h2>Nobody wins</h2> : null}
		</>
	);
};

