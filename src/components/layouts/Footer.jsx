import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className="text-white-100 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
			<div className=" container mx-auto text-white flex p-3 flex-col md:flex-row items-center">
				<Link
					href={'/'}
					className="flex title-font font-extrabold items-center  uppercase text-gray-100"
				>
					<Image alt="Navbar Logo" src={'/HKLogo.png'} width={60} height={60} />
					<p className="leading-5 text-lg mx-2 whitespace-nowrap ">
						<i>BAZZAR HK</i>
					</p>
				</Link>
				<div className="text-sm w-full text-gray-100 sm:ml-4 flex flex-col md:flex-row items-center gap-1 justify-between sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					<h3>Copyright © 2024 BazaarEcommerce HackerKernel</h3>
					<h3 className="px-14 ml-2">
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
