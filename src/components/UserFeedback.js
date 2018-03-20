import React, { Component } from 'react';

class UserFeedback extends Component {
	render() {
		return (
			<div className="user-feedback text-center">
				<div className="feedback__preference">
					<div>
						<h4>Help us serve you better</h4>
						<a href="#">Change Preferences</a>
					</div>
					<div>
						<img className="star" src="./assets/star.png" alt="star" />
						<h3>Your feedback is very <br /> valuable for us.</h3>
					</div>
				</div>
				<div className="feedback__block">
					<p>How satisfied were you with the flight? <br />Where 10 being the best and 1 being the worst</p>
					<span>10</span>
					<span>9</span>
					<span>8</span>
					<span>7</span>
					<span>6</span>
					<span>5</span>
					<span>4</span>
					<span>3</span>
					<span>2</span>
					<span>1</span>
				</div>
			</div>
		);
	}
}

export default UserFeedback;