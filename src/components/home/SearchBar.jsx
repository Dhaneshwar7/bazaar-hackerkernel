import { BazaarContext } from '@/utils/BazzarReducer';
import React, { useContext } from 'react';

const SearchBar = () => {
	const { dispatch } = useContext(BazaarContext);
	const [sidebar, setSidebar] = useState(false);

	const Sidebarhandle = () => {};

	const handleSearchChange = e => {
		e.preventDefault();
		console.log(e.target.value);
		// debouncing for delay search
		setTimeout(() => {
			const clear = 
			dispatch({ type: 'SET_SEARCH_TERM', term: e.target.value });
		}, 1000);
	};

	return (
		<>
			<header className="text-white-100 w-full z-20 max-sm:w-full m-auto sticky top-0 bg-gray-200">
				<div className="container mx-auto flex flex-wrap  p-1 flex-col md:flex-row max-sm:flex-row max-sm:justify-between items-center">
					<form action="/search">
						<label
							className="mx-auto mt-1 relative bg-white min-w-xl max-w-2xl flex flex-col md:flex-row items-center justify-center border py-1 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
							htmlFor="search"
						>
							<input
								id="search-bar"
								placeholder="your keyword here"
								name="search"
								required={true}
								onChange={handleSearchChange}
								className="px-10 text-black py-1 w-full rounded-md flex-1 outline-none bg-white"
							/>
							<button
								type="submit"
								className="w-full md:w-auto px-6 py-2 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
							>
								<div className="flex items-center transition-all opacity-1">
									<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
										Search
									</span>
								</div>
							</button>
						</label>
					</form>
					{/* this is Product add form opener */}
					<button
						onClick={Sidebarhandle}
						className="w-full md:w-auto px-6 py-2 items-end bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
					>
						<div className="flex items-center justify-center transition-all opacity-1">
							<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
								Add Product
							</span>
						</div>
					</button>
				</div>
			</header>
		</>
	);
};

export default SearchBar;
