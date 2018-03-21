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
					<div className="feedback__preference text-center">
						<div>
							<h4>Help us serve you better</h4>
							<a href="#">Change Preferences</a>
						</div>
						<div>
							<img className="star" src="./assets/star.png" alt="star" />
							<h3>Your feedback is very <br /> valuable for us.</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
