import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    notification: false,
    userProfile: false,
    cart: false
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#FF5C8E');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeBar, setThemeBar] = useState(false)

    const handleClick = (clickedElement) => {
        setIsClicked({...initialState, [clickedElement] : true })
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }
    
    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('themeColor', color)
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            themeBar, setThemeBar,
            currentColor, setColor,
            currentMode, setMode          
        }}
        >
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);