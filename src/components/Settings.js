import React, { Component } from 'react';

class Settings extends Component {
	render() {
		return (
			<div className="container">
				<div className="settings__wrapper">
					<img src="./assets/air-asia-hyd.png" className="img-responsive background-img" />
					<div className="settings__header text-center">
						<img className="user__avatar" src="./assets/telugu_man.png" alt="telugu_man"/>
						<h2 className="user__name">ధన్యవాదాలు , Rakesh!</h2>
						<h3 className="settings__greeting">Help us serve you better</h3>
					</div>
					<h2 className="heading text-center">Your Flight Settings</h2>
					<div className="setting__container">
						<div className="setting__questions">
							<label className="label">food</label>
							<div className="setting__option">
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Veg</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Non-Veg</span>
								</div>
								<div className="clearfix" />
							</div>
						</div>
						<div className="setting__questions">
							<label className="label">Seat Preference</label>
							<div className="setting__option">
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Window</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Middle</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Aisle</span>
								</div>
								<div className="clearfix" />
							</div>
						</div>
						<div className="setting__questions">
							<label className="label">Your Language</label>
							<div className="setting__option">
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Telugu</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Kannada</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Tamil</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Malyalam</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Marathi</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Other</span>
								</div>
								<div className="clearfix" />
							</div>
						</div>
						<div className="setting__questions">
							<label className="label">Port of Origin</label>
							<div className="setting__option">
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Hyderabad</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Bangalore</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Mumbai</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Kerala</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Chennai</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Other</span>
								</div>
								<div className="clearfix" />
							</div>
						</div>
						<div className="setting__questions">
							<label className="label">Frequent Destinations</label>
							<div className="setting__option">
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Bangalore</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Nagpur</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Mumbai</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Kerala</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Chennai</span>
								</div>
								<div className="setting__choices col-xs-4">
									<span className="radio-outer">
										<span className="radio-inner" />
									</span>
									<span>Other</span>
								</div>
								<div className="clearfix" />
							</div>
						</div>
						<div className="comment__btn text-center">
							<button type="button" className="btn btn-secondary">Skip</button>
							<button type="button" className="btn btn-primary">Done</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;
