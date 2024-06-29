import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const index = () => {
	//for checking user availbale or not !! Show 404 page
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		console.log(mounted);
		console.log(localStorage.getItem('loginToken'));
		if (JSON.parse(localStorage.getItem('loginToken') === 'QpwL5tke4Pnpja7X4')) {
			setMounted(true);
		}else{
      setMounted(false)
    }
	}, [mounted]);

	return (
    <>
    <Head>
      <title>Homepage</title>
    </Head>
    {mounted ? (
      <div>Welcome to home page</div>
    ):(
      <div>Not login page</div>
    )}
    </>
  );
};

export default index;
