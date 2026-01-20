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
            secondary: "#acaaaa",
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
