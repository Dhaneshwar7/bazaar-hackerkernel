import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="bg-slate-200 dark:bg-slate-900 ">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
