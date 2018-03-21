import React, { Component } from 'react';

class UserComment extends Component {
	render() {
		return (
			<div className="user-feedback text-center">
				<div className="feedback__block container">
					<p>Please leave your valuable comments</p>
					<textarea id="input" className="form-control comment" rows="3" placeholder="Please add your comment here" />
				</div>
			</div>
		);
	}
}

export default UserComment;
