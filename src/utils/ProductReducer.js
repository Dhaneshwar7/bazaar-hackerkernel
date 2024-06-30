import React, { useReducer } from 'react';



function reducer(state, action) {
	const { type } = action;

	switch (type) {
		case 'increment': {
			return { ...state, count: state.count + 1 };
		}
		case 'decrement': {
			return { ...state, count: state.count - 1 };
		}
		default:
			return state;
	}
}
