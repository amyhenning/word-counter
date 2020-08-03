import React, { useState } from 'react';
import CountInfo from './CountInfo';
import './TextBox.css';

function TextBox() {
	const [text, setText] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleChange(event) {
		setText(event.target.value);
		setSubmitted(false);
	}

	function handleClick(event) {
		event.preventDefault();
		setText('');
		setSubmitted(false);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
        <textarea value={text} onChange={handleChange} placeholder="Enter your text here." />
        <br /><br />
        <button type="button" className="button" onClick={handleClick}>Reset</button>&nbsp;
        <button type="submit" className="button" value="Submit">Submit</button>
      </form>

			{text && submitted && <CountInfo text={text} />}
		</div>
	)
}

export default TextBox;
