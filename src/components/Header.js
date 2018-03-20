import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="hamburger">
						<div className="hamburger__icon" />
						<div className="hamburger__icon" />
						<div className="hamburger__icon" />
					</div>
				</div>
			</header>
		);
	}
}


export default Header;