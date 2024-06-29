import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Custom404 from '../404';

const Homepage = () => {
	//for checking user availbale or not !! Show 404 page
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		console.log(mounted);
		console.log(localStorage.getItem('loginToken'));
		if (
			JSON.parse(localStorage.getItem('userAuth'))===true
		) {
			setMounted(true);
		} else {
			setMounted(false);
		}
	}, [mounted]);

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			{mounted ? <div>Welcome to home page</div> : <Custom404 />}
		</>
	);
};

export default Homepage;
