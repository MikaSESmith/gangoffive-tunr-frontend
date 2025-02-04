import React from "react";

const Song = (props) => {
	return (
		<section onClick={()=>{props.handleUpdateClick(props.song)}}className="song-component">
			<span>{props.song.title}</span>
			<span>{props.song.artist}</span>
			<span>{props.song.time}</span>
			<button onClick={()=>{props.handleAddPlay(props.song)}}>Play</button>
		</section>
	);
};
export default Song