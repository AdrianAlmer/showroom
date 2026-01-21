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
