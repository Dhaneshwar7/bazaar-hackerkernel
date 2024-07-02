// This Debounce Custom for Searching delay(7s) which will work when User Type full word ,instead of Typing & Searching in each letter and search for it
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
			console.log(value);
			setLoading(false);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);
	return { debouncedValue, loading };
};
