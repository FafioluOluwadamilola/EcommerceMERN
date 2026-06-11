import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        //Check localStorage for saved theme
        const savedTheme = localStorage.getItem("theme")

        if (savedTheme) {
            return savedTheme
        } else {
            // If no saved theme, check system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            return prefersDark ? "dark" : "light"
        }
    })

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }


        // Save theme to localStorage whenever it changes
        localStorage.setItem("theme", theme)

    }, [theme])







    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext)