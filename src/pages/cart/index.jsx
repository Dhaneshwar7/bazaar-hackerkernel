import React, { useReducer } from 'react';

/**
 * @typedef {Object} State
 * @property {number} count
 * @property {string | null} error
 */

/**
 * @typedef {Object} Action
 * @property {'increment' | 'decrement'} type
 */

/**
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */

function reducer(state, action) {
	const { type } = action;

	switch (type) {
		case 'increment': {
			return { ...state, count: state.count + 1 };
		}
		case 'decrement': {
			return { ...state, count: state.count -1  };
		}
		default:
			return state;
	}
}

export default function cartDemo() {
	const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

	return (
		<>
			<div>Counter: {state.count}</div>
			{state.error && <div> {state.error}</div>}
			<button onClick={() => dispatch({ type: 'increment' })}>INcrement</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>DEcrement</button>
		</>
	);
}
