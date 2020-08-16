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
			if (element.id == id) {
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
			<div className="container">
				<div clasName="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h1 className="text-center">LIST TO DO</h1>
						<div className=" card card-body mt-2">
							<div className=" input-group">
								<div className=" input-group-prepend">
									<div className="input-group-text bg-primary text-white">
										<i className="fas fa-book" />
									</div>
								</div>

								<input
									className="form-control text-capitalize"
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
								<div className="input-group-append">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => this.btnToList()}>
										agregar
									</button>
								</div>
							</div>
						</div>

						<ul className="list-group my-2">
							<List
								lista={this.state.list}
								btnDeleteClicked={this.btnDeleteClicked}
								done={this.state.done}
								checkDone={this.checkDone}
							/>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
