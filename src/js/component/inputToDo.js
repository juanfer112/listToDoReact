import React from "react";
import List from "./list.js";

import "../../styles/index.scss";

export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			userInput: "",
			done: false
		};
	}

	isEmpty(str) {
		console.log(str.replace(/^\s+|\s+$/gm, "").length);
		return str.replace(/^\s+|\s+$/gm, "").length == 0;
	}

	addToList(e) {
		if (e.which == 13 || e.keyCode == 13) {
			if (!this.isEmpty(this.state.userInput)) {
				let listArray = this.state.list.concat(this.state.userInput);
				this.setState({
					list: listArray,
					userInput: ""
				});
			}
		}
	}
	btnToList() {
		if (!this.isEmpty(this.state.userInput)) {
			let listArray = this.state.list.concat(this.state.userInput);
			this.setState({
				list: listArray,
				userInput: ""
			});
		}
	}
	btnDeleteClicked = id => {
		this.setState({
			list: this.state.list.filter((item, pos) => pos !== id)
		});
	};

	checkDone = e => {
		this.setState({
			done: !this.state.done
		});
	};

	/*checkBox = id => {
		const checkElement = this.state.list.map(element => {
			if (element == id) {
				element.done = !element.done;
			}
			return element;
		});
		this.setState({
			task: checkElement
		});
	};*/

	render() {
		return (
			<div className="main">
				<h1>LIST TO DO</h1>
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
					<List
						lista={this.state.list}
						btnDeleteClicked={this.btnDeleteClicked}
						done={this.state.done}
						checkDone={this.checkDone}
					/>
				</ul>
			</div>
		);
	}
}
