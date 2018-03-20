import React, { Component } from 'react';

import User from './../components/User';
import UserFeedback from './../components/UserFeedback';

class Feedback extends Component {
	render() {
		return (
			<div className="feedback">
				<User />
				<UserFeedback />
			</div>
		);
	}
}

export default Feedback;