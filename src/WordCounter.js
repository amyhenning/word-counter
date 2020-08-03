import React from 'react';
import TextBox from './TextBox';
import './WordCounter.css';

function WordCounter() {
	return (
		<div className="container">
			<h1><span>Hi, I'm a Word Counter</span></h1>
			<TextBox />
		</div>
	)
}

export default WordCounter;
