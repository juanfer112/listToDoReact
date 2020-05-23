import React from "react";
//import List from "./list.js";

export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			userInput: ""
		};
	}
	changeUserInput(input) {
		console.log(input);
		this.setState({
			userInput: input
		});
		console.log(this.state.userInput);
	}

	addToList(e) {
		if (e.key === "Enter") {
			console.log(e.state);
			let listArray = this.state.list.concat(e);
			console.log(listArray);
			//listArray.push(input);
			//console.log(listArray.push(input));
			this.setState({
				list: listArray,
				userInput: ""
			});
		}
	}

	btnToList(input) {
		//event.preventDefault();
		let listArray = this.state.list.concat(input);
		console.log(listArray);
		//listArray.push(input);
		//console.log(listArray.push(input));
		this.setState({
			list: listArray,
			userInput: ""
		});
	}

	/*taskCounter = leng => {
		if (leng === 0) {
			return (
				<li className="taskCounter text-muted">No tasks, add a task</li>
			);
		} else if (leng === 1) {
			return <li className="taskCounter text-muted">{leng} item left</li>;
		} else if (leng > 1) {
			return (
				<li className="taskCounter text-muted">{leng} items left</li>
			);
		}
	};*/

	render() {
		return (
			<div className="main">
				<h1>todos</h1>
				<input
					type="text"
					placeholder="What need to be done?"
					//onKeyPress={this.addToList}
					onChange={e => this.changeUserInput(e.target.value)}
					value={this.state.userInput}
					onKeyPress={() => this.addToList(this.state.userInput)}
				/>
				<button onClick={() => this.btnToList(this.state.userInput)}>
					Picnha
				</button>

				<ul>
					{this.state.list.map((element, i) => (
						<li key={i}>{element}</li>
					))}
				</ul>
			</div>
		);
	}
}
