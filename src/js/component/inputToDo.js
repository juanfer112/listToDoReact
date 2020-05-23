import React from "react";
//import List from "./list.js";2
export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			userInput: ""
		};
	}

	addToList(e) {
		if (e.which == 13 || e.keyCode == 13) {
			let listArray = this.state.list.concat(this.state.userInput);
			this.setState({
				list: listArray,
				userInput: ""
			});
		}
	}
	btnToList() {
		let listArray = this.state.list.concat(this.state.userInput);
		this.setState({
			list: listArray,
			userInput: ""
		});
	}
	render() {
		return (
			<div className="main">
				<h1>todos</h1>
				<input
					type="text"
					placeholder="TASK TO DO?"
					onChange={e => {
						this.setState({
							...this.state,
							userInput: e.target.value
						});
					}}
					value={this.state.userInput}
					onKeyPress={e => this.addToList(e)}
				/>
				<button onClick={() => this.btnToList()}>Pincha</button>
				<ul>
					{this.state.list.map((element, i) => (
						<li key={i}>{element}</li>
					))}
				</ul>
			</div>
		);
	}
}
