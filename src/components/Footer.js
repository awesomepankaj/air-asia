import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<nav>
						<ul className="menu">
							<li><a href="#">Menu</a></li>
							<li><a href="#">Exit</a></li>
						</ul>
					</nav>
				</div>
			</footer>
		);
	}
}

export default Footer;