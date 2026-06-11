import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (

        <UIContext.Provider
            value={{
                showLogin,
                setShowLogin,
                showSignUp,
                setShowSignUp
            }}
        >
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => useContext(UIContext);