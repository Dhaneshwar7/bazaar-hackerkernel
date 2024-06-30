import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Footertab from '../home/SearchBar';

const Layout = ({ children }) => {
	return (
		<div className="bg-slate-200 dark:bg-slate-900 ">
			<Navbar />
			<main className="tmain max-h-[90vh]">
				{children}
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
