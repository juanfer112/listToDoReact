import React from "react";
import List from "./list.js";

import "../../styles/index.scss";

export default class Posts extends React.Component {
	/*async componentDidMount() {
		const url = "https://api.randomuser.me/";
		const response = await fetch(url);
		console.log(response);
		//const data = await response.json();
		//console.log(data);
	}*/

	render() {
		return (
			<h1>POSTS</h1>
			/*<div>
				{this.state.loading ? (
					<div>loading....</div>
				) : (
					<div>person...</div>
				)}
			</div>*/
		);
	}
}
