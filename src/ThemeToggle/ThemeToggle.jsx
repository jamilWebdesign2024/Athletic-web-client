import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title="Toggle light/dark theme"
        >
            {theme === "dark" ? (
                <FaSun className="text-yellow-400" size={20} />
            ) : (
                <FaMoon className="text-gray-700" size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;
