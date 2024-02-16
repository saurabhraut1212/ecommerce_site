import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className="navbar-container">
				<Link href="/" className="navbar-brand">
					E-commerce website
				</Link>

				<div className="navbar-links">
					<Link href="/login" className="navbar-link">
						Login
					</Link>
					<Link href="/signup" className="navbar-link">
						Signup
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
