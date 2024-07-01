import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className="text-white-100 bg-gradient-to-r from-cyan-800  to-indigo-600 body-font">
			<div className=" container mx-auto text-white flex p-3 max-sm:p-0 flex-col md:flex-row items-center">
				<Link
					href={'/'}
					className="flex title-font font-extrabold items-center h-fit uppercase text-gray-100"
				>
					<Image
						alt="Navbar Logo"
						src={'/HKLogo.png'}
						width={60}
						height={60}
						className="scale-50"
					/>
					<p className="leading-5 text-base md:text-lg mx-2 whitespace-nowrap ">
						<i>BAZZAR HK</i>
					</p>
				</Link>
				<div className="text-sm w-full text-gray-100 sm:ml-4 flex flex-col md:flex-row items-center gap-1 justify-between sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-0 md:mt-4">
					<h3 className="text-center max-sm:text-xs max-sm:whitespace-nowrap">
						Copyright © 2024 BazaarEcommerce HackerKernel
					</h3>
					<h3 className="px-5 ml-2 text-center max-sm:py-2 max-sm:mb-2">
						Task Developed by{'  '}
						<a
							className="text-white text-base px-2 py-1 md:bg-slate-900 bg-slate-900 rounded"
							href="https://www.dhaneshwar.site"
						>
							<i>@Dhaneshwar</i>{' '}
						</a>
					</h3>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
