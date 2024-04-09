import React from "react";

import { useState, useEffect } from "react";

export default function SquareButton(props: any) {
	const [move, setNewMove] = useState("");


	const { updateValue } = props;

	useEffect(() => {
		updateValue(move)
	}, [move]);


	let id = props.id;
	const changeMove = () => {
		if (move === "") {
			setNewMove(move === '' && props.player1 ? 'X' : 'O');
		}
		return { move, id };
	};
	return (
		<button className="square-button"
			onClick={() => changeMove()}
		>{move}</button>
	)

}