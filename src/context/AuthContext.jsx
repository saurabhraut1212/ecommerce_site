'use client';

import { createContext } from 'react';

export const FirebaseContext = createContext();

const AuthProvider = ({ children }) => {
	return (
		<FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
	);
};
export default AuthProvider;
