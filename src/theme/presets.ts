import { createTheme } from "@mui/material";

export const theme1 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#605f5f",
            paper: "#070505",
        },
        primary: {
            main: "#510f77",
        },
        secondary: {
            main: "#205723",
        },
        text: {
            primary: "#fafafa",
            secondary: "#FFFFFFCC",
        },
        divider: "#757474"
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#510f77", //#c62828
                    "&.Mui-expanded": {
                        color: "#c62828", //#2e7d32
                    },
                },
            },
        },
    },
});

export const theme2 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#4a3f3f",
            paper: "#1c1212",
        },
        primary: {
            main: "#c62828",
        },
        secondary: {
            main: "#f9a825",
        },
        text: {
            primary: "#fafafa",
            secondary: "#FFFFFFCC",
        },
        divider: "#757474"
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#c62828",
                    "&.Mui-expanded": {
                        color: "#f9a825",
                    },
                },
            },
        },
    },
});


export const theme3 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#2f3a36",
            paper: "#101614",
        },
        primary: {
            main: "#2e7d32",
        },
        secondary: {
            main: "#80cbc4",
        },
        text: {
            primary: "#fafafa",
            secondary: "#FFFFFFCC",
        },
        divider: "#757474"
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#2e7d32",
                    "&.Mui-expanded": {
                        color: "#80cbc4",
                    },
                },
            },
        },
    },
});

export const theme4 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#e9eef6",
            paper: "#f7f9fc",
        },
        primary: {
            main: "#510f77",
        },
        secondary: {
            main: "#2e7d32",
        },
        text: {
            primary: "#121212",
            secondary: "#121212B3", // ~70%
        },
        divider: "rgba(0,0,0,0.12)",
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#510f77",
                    "&.Mui-expanded": {
                        color: "#2e7d32",
                    },
                },
            },
        },
    },
});

export const theme5 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#e8f6ef",
            paper: "#f5fffb",
        },
        primary: {
            main: "#c62828",
        },
        secondary: {
            main: "#f9a825",
        },
        text: {
            primary: "#1a1a1a",
            secondary: "#1a1a1ab3",
        },
        divider: "rgba(0,0,0,0.12)",
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#c62828",
                    "&.Mui-expanded": {
                        color: "#f9a825",
                    },
                },
            },
        },
    },
});

export const theme6 = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#f3f7f5",
            paper: "#ffffff",
        },
        primary: {
            main: "#2e7d32",
        },
        secondary: {
            main: "#80cbc4",
        },
        text: {
            primary: "#10201a",
            secondary: "#10201ab3",
        },
        divider: "rgba(0,0,0,0.12)",
    },
    typography: {
        fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: "#2e7d32",
                    "&.Mui-expanded": {
                        color: "#80cbc4",
                    },
                },
            },
        },
    },

});

