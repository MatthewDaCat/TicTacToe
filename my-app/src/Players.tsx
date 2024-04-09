import React from "react";
import { useState } from "react";

export default function Players({ onSubmit }: { onSubmit: any }) {

	const [newPlayer1, setNewPlayer1] = useState("")
	const [newPlayer2, setNewPlayer2] = useState("")


	function recivePlayers(event: any) {
		event.preventDefault()
		if (newPlayer1 === "" && newPlayer2 === "") return

		onSubmit(newPlayer1, newPlayer2)

		setNewPlayer1("")
		setNewPlayer2("")
	}

	
	return (
		<>
			<form className="player-name-input" onSubmit={recivePlayers}>
				<h1 className="title">TIC TAC TOE</h1>

				<label htmlFor="player-1">Player 1</label>
				<input
					value={newPlayer1}
					onChange={e => setNewPlayer1(e.target.value)}
					type="text"
					id="player1" />

				<label htmlFor="player-2">Player 2</label>
				<input
					value={newPlayer2}
					onChange={e => setNewPlayer2(e.target.value)}
					type="text"
					id="player2" />

			</form>

		</>
	);
}

