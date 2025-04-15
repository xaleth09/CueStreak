import React, { useReducer } from 'react';

const DEFAULT_MATCH_STATE = {};

const formReducer = (state, action) => {
	switch(action.type) {
		case 'rawr':
			return {...state, [action.key]: action.value};
		case 'RESET':
			return DEFAULT_MATCH_STATE;
		default:
			return state;
	}
};

const MatchInProgressContext = React.createContext<{
	state: any;
	dispatch: React.Dispatch<any>
} | undefined>(undefined);

export const MatchInProgressProvider = ({children}) => {
	const [state, dispatch] = useReducer(formReducer, DEFAULT_MATCH_STATE);

	return (
		<MatchInProgressContext.Provider value={{state, dispatch}}>
			{children}
		</MatchInProgressContext.Provider>
	);
};
