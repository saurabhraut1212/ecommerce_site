'use client';

import React, { useState } from 'react';
import './SignupForm.css';
import { signup } from '../../firebase/Auth/signup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

const SignupForm = () => {
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
			await signup(email, password);
			toast.success('Signup successful');
			router.push('/login');
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

				<button type="submit">Sign Up</button>
				<p>
					Already have an account <Link href="/login">login</Link>
				</p>
			</form>
		</div>
	);
};

export default SignupForm;
