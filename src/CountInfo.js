import React from 'react';
import './CountInfo.css';

function CountInfo(props) {

	// TODO: Get rid of punctuation marks surrounded by spaces
	// or maybe just all punctuation marks...
	const spaces = RegExp(/[\r\s]+/g);

	function wordCounter(text) {
		const ellipsis = RegExp(/\.\s?\.\s?\.?/g);
		const dash = RegExp(/\s\u2013|\u2014|\-\s/g);
		let words = text.trim().replace(dash, '').replace(ellipsis, '').replace(spaces, ' ').split(' ');
		return words.length;
	}

	function characterCounter(text) {
		let characters = text.trim().replace(spaces, ' ').split('');
		return characters.length;
	}

	function characterCounterWithoutSpaces(text) {
		let characters = text.trim().replace(spaces, '').split('');
		return characters.length;
	}

	return (
		<div className="count-info">
			<div className="row">
				<h2 className="category">Words:</h2>
				<h2 className="count">{wordCounter(props.text)}</h2>
			</div>
			<div className="row">
				<h2 className="category">Characters (with spaces):</h2>
				<h2 className="count">{characterCounter(props.text)}</h2>
			</div>
			<div className="row">
				<h2 className="category">Characters (no spaces):</h2>
				<h2 className="count">{characterCounterWithoutSpaces(props.text)}</h2>
			</div>
		</div>
	)
}

export default CountInfo;
