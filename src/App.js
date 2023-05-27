import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'Increment':
			return { ...state, count: state.count + 1 };
		case 'Decrement':
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

function App() {
	const [updatedCount, dispatch] = useReducer(reducer, initialState);
	return (
		<div className='App'>
			<h4>Current Count: {updatedCount.count}</h4>
			<button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
		</div>
	);
}

export default App;
