import React, { useContext, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    
    return <AppContext.Provider value={{ isMenuOpen, isSidebarOpen, setIsMenuOpen, setIsSidebarOpen }}>
            {children}
        </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext)
}