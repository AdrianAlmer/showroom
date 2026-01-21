"use client";

import * as React from "react";

export type ThemeKey = "theme1" | "theme2" | "theme3" | "theme4" | "theme5" | "theme6";

type ThemeControllerValue = {
    themeKey: ThemeKey;
    setThemeKey: (k: ThemeKey) => void;
};

const ThemeControllerContext = React.createContext<ThemeControllerValue | null>(null);

export function ThemeControllerProvider({value, children, }: { value: ThemeControllerValue; children: React.ReactNode; })
{
    return (
        <ThemeControllerContext.Provider value={value}>
            {children}
        </ThemeControllerContext.Provider>
    );
}

export function useThemeController() {
    const ctx = React.useContext(ThemeControllerContext);
    if (!ctx) throw new Error("useThemeController must be used within ThemeControllerProvider");
    return ctx;
}
