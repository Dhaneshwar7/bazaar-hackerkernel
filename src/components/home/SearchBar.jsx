import { BazaarContext } from '@/utils/BazzarReducer';
import { useDebounce } from '@/utils/useDebounce';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

const SearchBar = () => {
	const { state, dispatch } = useContext(BazaarContext);
	const [sidebar, setSidebar] = useState(true);
	const [search, setSearch] = useState('');
	const { debouncedValue: debouncedSearch, loading } = useDebounce(search, 700);
	// console.log(`Loading value ------ ${loading}`);

	const Sidebarhandle = () => {
		setSidebar(prevState => !prevState);
		// console.log(`search bar ka ${sidebar}`);
	};
	useEffect(() => {
		dispatch({ type: 'SET_PRODUCT_SLIDE', sidebar: sidebar });
	}, [sidebar]);

	const handleSearchChange = e => {
		setSearch(e.target.value);
		// console.log(search);
	};

	useEffect(() => {
		if (debouncedSearch === '') {
			dispatch({ type: 'SET_SEARCH_TERM', term: '' });
		} else {
			dispatch({ type: 'SET_SEARCH_TERM', term: debouncedSearch });
		}
	}, [debouncedSearch, dispatch]);

	return (
		<>
			{JSON.parse(localStorage.getItem('userAuth')) ? (
				<>
					<header className="text-white-100 w-full z-20 max-sm:w-full m-auto sticky top-0 border-r-[.5px] border-b-[.5px] drop-shadow-lg dark:border-b-slate-100  bg-slate-200 dark:bg-slate-800 dark:text-gray-100">
						<div className="container mx-auto flex flex-wrap justify-between max-sm:flex max-sm:px-3 max-sm:items-center  p-1 flex-col md:flex-row max-sm:flex-row max-sm:justify-between items-center">
							<form action="/search" className="max-sm:w-2/3">
								<label
									className="mx-auto mt-1 max-sm:mt-0 relative max-sm:flex max-sm:justify-betwee max-sm:whitespace-nowrap max-sm:flex-row bg-white min-w-xl max-w-2xl max-sm:max-w-sm flex flex-col md:flex-row items-center justify-center border py-1 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
									htmlFor="search"
								>
									<input
										id="search-bar"
										placeholder="your keyword here"
										name="search"
										required={true}
										onChange={handleSearchChange}
										className="px-10 text-black py-1 max-sm:py-0 w-full max-sm:w-2/3 max-sm:px-2 rounded-md flex-1 outline-none bg-white"
									/>
									<button
										type="submit"
										className="w-full md:w-auto px-6 max-sm:p-1 py-2 max-sm:w-1/4 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
									>
										<div className="flex items-center transition-all opacity-1">
											{loading ? (
												<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
													<Image
														src="/loading.gif"
														width={20}
														height={20}
														alt="Searching🔍"
													/>
												</span>
											) : (
												<span className="text-sm max-sm:text-xs font-semibold whitespace-nowrap truncate mx-auto">
													Search
												</span>
											)}
										</div>
									</button>
								</label>
							</form>
							{/* this is Product add form opener */}
							<button
								onClick={Sidebarhandle}
								className="w-full md:w-auto px-6 py-2 items-end max-sm:px-3 max-sm:py-2  max-sm:w-1/3 bg-slate-900 dark:bg-slate-100 dark:text-black  border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
							>
								<div className="flex items-center justify-center transition-all opacity-1">
									<span className="max-sm:text-xs max-sm:w-full max-sm:p-0 flex items-center justify-between gap-1 font-semibold whitespace-nowrap truncate mx-auto">
										Add Product{' '}
										{sidebar ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="18"
												height="18"
												fill="currentColor"
											>
												<path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="18"
												height="18"
												fill="currentColor"
											>
												<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
											</svg>
										)}
									</span>
								</div>
							</button>
						</div>
					</header>
				</>
			) : (
				<div></div>
			)}
		</>
	);
};

export default SearchBar;
