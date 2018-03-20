import React, { Component } from 'react';

class User extends Component {
	render() {
		return (
			<div className="user">
				<div className="container">
					<div className="user__avatar text-center">
						<img src="./assets/feedback-he.png" alt="avatar" />
					</div>
					<div className="user__details text-center">
						<h2 className="user__name">నమస్కారాలు , Rakesh</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
