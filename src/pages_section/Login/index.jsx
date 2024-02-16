'use client';

import React, { useState } from 'react';
import './LoginForm.css';
import { useRouter } from 'next/navigation';
import { signin } from '../../firebase/Auth/signin';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signin(email, password);
			toast.success('Login successful');
			router.push('/');
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<div className="signup-form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleEmailChange}
					required
				/>

				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={handlePasswordChange}
					required
				/>

				<button type="submit">Login</button>
				<p>
					Don't have an account <Link href="/signup">signup</Link>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
