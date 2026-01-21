"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme1, theme2, theme3, theme4, theme5, theme6 } from "./presets";
import { ThemeControllerProvider, type ThemeKey } from "./ThemeController";

const themes = { theme1, theme2, theme3, theme4, theme5, theme6 } as const;
const STORAGE_KEY = "hemsida_theme";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [themeKey, setThemeKeyState] = React.useState<ThemeKey>("theme1");

    React.useEffect(() => {
        const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
        if (saved && saved in themes) setThemeKeyState(saved);
    }, []);

    const setThemeKey = (k: ThemeKey) => {
        setThemeKeyState(k);
        window.localStorage.setItem(STORAGE_KEY, k);
    };

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={themes[themeKey]}>
                <CssBaseline />
                <ThemeControllerProvider value={{ themeKey, setThemeKey }}>
                    {children}
                </ThemeControllerProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
