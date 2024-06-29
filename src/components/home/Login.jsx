import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Login = () => {
	const router = useRouter();
	const [logmount, setLogmount] = useState(false);
	const userAuthToken = process.env.NEXT_PUBLIC_USER_AUTH_TOKEN;
	// console.log(userAuthToken);
	const [credentials, setCredentials] = useState({ email: '', password: '' });

	// Form Submission Handle and fetch api which is given and get token;
	const handleFormSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('https://reqres.in/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password,
				}),
			});
			const res = await response.json();
			// console.log(res.token);
			if (res.token === userAuthToken) {
				console.log('djfldfjo');
				localStorage.setItem('loginToken', res.token);
				localStorage.setItem('userAuth', true);
				router.push('/homepage');
			} else {
		alert(`${res.error} || Wrong Credintials Please try again`);
				
			}
		} catch (error) {
			console.log(`login errror${error.message}`);
		}
	};
	//form inputs data control onHandleChange
	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		// console.log(credentials);
	};
	useEffect(() => {
		// console.log(localStorage.getItem('userAuth'));
		if (JSON.parse(localStorage.getItem('userAuth')) === true) {
			console.log('ehti wokr');
			setLogmount(true);
		} else {
			console.log('No userAuth is there');
			setLogmount(false);
		}
	}, [logmount]);

	if (logmount) {
		router.push('/homepage');
	}
	return (
		<>
			<Head>
				<title>Login 🔐</title>
			</Head>
			<div className="container bg-transparent w-full max-w-lg">
				<form
					onSubmit={handleFormSubmit}
					className="bg-gray-100 dark:bg-neutral-950 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-12 pb-12 mb-6"
				>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
						>
							Username
						</label>
						<input
							placeholder="Enter your Email"
							onChange={handleChange}
							value={credentials.email}
							name="email"
							type="email"
							required
							className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							placeholder="*******"
							onChange={handleChange}
							value={credentials.password}
							name="password"
							autoComplete="on"
							required
							type="password"
							className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="flex items-center justify-between"></div>
					<button
						type="submit"
						className="border m-auto     text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-gray-500 to-zinc-300 hover:text-gray-100"
					>
						Log in
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
