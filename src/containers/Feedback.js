import React, { Component } from 'react';

import User from './../components/User';
import UserFeedback from './../components/UserFeedback';
import UserComment from './../components/UserComment';

class Feedback extends Component {
	render() {
		return (
			<div className="feedback">
				<User />
				<UserComment />
			</div>
		);
	}
}

export default Feedback;