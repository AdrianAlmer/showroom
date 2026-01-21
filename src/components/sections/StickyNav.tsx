"use client";

import React from "react";
import {AppBar, Container, Link as MuiLink, Stack, Toolbar, Typography, IconButton, Menu, MenuItem, ListItemText} from "@mui/material";
import { clearHash } from "@/lib/clearHash";
import MobileDrawerMenu from "@/components/sections/MobileDrawerMenu";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import {useThemeController} from "@/theme/ThemeController";
import {useTheme} from "@mui/system";

type NavLink = { label: string; href: string };

type Props = {
    brand: string;
    links: NavLink[];
};

export default function StickyNav({ brand, links }: Props) {

    const {themeKey, setThemeKey} = useThemeController();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);

    const openMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const themeLabels: Record<string, string> = {
        theme1: "1 • Dark1",
        theme2: "2 • Dark2",
        theme3: "3 • Dark3",
        theme4: "4 • Light1",
        theme5: "5 • Light2",
        theme6: "6 • Light3",
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                borderBottom: "1px solid",
                borderColor: "divider",
            }}
        >
            <Toolbar disableGutters>
                <Container maxWidth="md">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        {/* Vänster: Brand + (mobil) hamburger */}
                        <Stack direction="row" alignItems="center" spacing={1}>
                            {/* Mobilmeny: endast xs-sm */}
                            <MobileDrawerMenu
                                brand={brand}
                                links={links}
                                //cta={{ label: "Beställ", href: "#menu" }}
                            />

                            <Typography
                                component="button"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 700,
                                    border: 0,
                                    background: "transparent",
                                    padding: 0,
                                    color: "inherit",
                                    cursor: "pointer",
                                }}
                            >
                                {brand}
                            </Typography>
                        </Stack>

                        {/* Desktop-länkar: md+ */}
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ flexWrap: "wrap", display: { xs: "none", md: "flex" } }}
                        >
                            {links.map((l) => (
                                <MuiLink
                                    key={l.href}
                                    href={l.href}
                                    underline="hover"
                                    color="text.secondary"
                                    sx={{ fontSize: 16, fontWeight:"500", letterSpacing: 0.3 }}
                                    onClick={() => {
                                        setTimeout(clearHash, 0);
                                    }}
                                >
                                    {l.label}
                                </MuiLink>
                            ))}
                        </Stack>
                        {/* Theme button */}
                        <IconButton
                            aria-label="Theme"
                            onClick={openMenu}
                            size="small"
                            sx={{ color: "text.primary" }}
                        >
                            <PaletteOutlinedIcon fontSize="small" />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={menuOpen}
                            onClose={closeMenu}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                        >
                            {(["theme1","theme2","theme3","theme4","theme5","theme6"] as const).map((k) => (
                                <MenuItem
                                    key={k}
                                    selected={themeKey === k}
                                    onClick={() => {
                                        setThemeKey(k);
                                        closeMenu();
                                    }}
                                >
                                    <ListItemText primary={themeLabels[k] ?? k} />
                                </MenuItem>
                            ))}
                        </Menu>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
