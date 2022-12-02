import { useState, useContext, createContext, useEffect, useRef} from "react";

const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
	const ref = useRef();
	let num;

	const scrollTo = (num) => {
		ref.current.scrollTo(num);
	}

	return(
		<NavContext.Provider value={{ ref, scrollTo, num }}>
			{children}
		</NavContext.Provider>

		);

};

export const useNav = () => {
	return useContext(NavContext) 
}

