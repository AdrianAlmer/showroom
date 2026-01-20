"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider,} from "@mui/material";
import {theme1} from "./presets";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme1}>
                <CssBaseline />
                     {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
