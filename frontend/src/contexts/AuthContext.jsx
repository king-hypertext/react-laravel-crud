import { createContext, useContext, useState } from "react";

const userAuthContext = createContext({
    user: null,
    authToken: null,
    setUser: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [authToken, setAuthToken] = useState(localStorage.getItem('AUTH_TOKEN'));
    const setToken = (token) => {
        setAuthToken(token);
        token ? localStorage.setItem('AUTH_TOKEN', token) : localStorage.removeItem('AUTH_TOKEN');
    }
    return (
        <userAuthContext.Provider value={{ user, authToken, setUser, setToken }}>
            {children}
        </userAuthContext.Provider>
    )
}
export const userStateContext = () => useContext(userAuthContext);