"use client";

import * as React from "react";
import {Drawer,Box,IconButton,Stack,Typography,Divider,List,ListItemButton,ListItemText,Button,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {clearHash} from "@/lib/clearHash";
import { ButtonGroup } from "@mui/material";
import { useThemeController } from "@/theme/ThemeController";

type NavLink = { label: string; href: string };

type Props = {
    brand: string;
    links: NavLink[];
    cta?: { label: string; href: string };
};

export default function MobileDrawerMenu({ brand, links, cta }: Props) {

    const [open, setOpen] = React.useState(false);
    const { themeKey, setThemeKey } = useThemeController();

    const close = () => setOpen(false);
    const openMenu = () => setOpen(true);

    const handleNavCLick = () => {
        close();
        setTimeout(clearHash, 0);
    }

    return (
        <>
            <IconButton
                aria-label="Open menu"
                onClick={openMenu}
                edge="start"
                sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={open}
                onClose={close}
                slotProps={{
                    paper: {
                        sx: { width: 320, maxWidth: "85vw", display: "flex", flexDirection: "column" },
                    },
                }}
            >
                <Box sx={{ p: 2, display: "flex", flexDirection: "column", flex: 1 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6">{brand}</Typography>
                        <IconButton aria-label="Close menu" onClick={close} sx={{color: "text.primary"}} >
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <List disablePadding>
                        {links.map((l) => (
                            <ListItemButton
                                key={l.href}
                                component="a"
                                href={l.href}
                                onClick={handleNavCLick}
                                sx={{ borderRadius: 2 }}
                            >
                                <ListItemText primary={l.label} />
                            </ListItemButton>
                        ))}
                    </List>

                    <Box sx={{ flexGrow: 1 }} />

                    {cta && (
                        <Box sx={{ pt: 2 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                component="a"
                                href={cta.href}
                                onClick={handleNavCLick}
                            >
                                {cta.label}
                            </Button>
                        </Box>
                    )}
                    {/*Ändra tema i drawern*/}
                    {/*<Divider sx={{ my: 2 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
                        Tema
                    </Typography>

                    <ButtonGroup fullWidth variant="outlined" size="small">
                        <Button
                            onClick={() => setThemeKey("theme1")}
                            variant={themeKey === "theme1" ? "contained" : "outlined"}
                        >
                            1
                        </Button>
                        <Button
                            onClick={() => setThemeKey("theme2")}
                            variant={themeKey === "theme2" ? "contained" : "outlined"}
                        >
                            2
                        </Button>
                        <Button
                            onClick={() => setThemeKey("theme3")}
                            variant={themeKey === "theme3" ? "contained" : "outlined"}
                        >
                            3
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup fullWidth variant="outlined" size="small">
                        <Button
                            onClick={() => setThemeKey("theme4")}
                            variant={themeKey === "theme4" ? "contained" : "outlined"}
                        >
                            4
                        </Button>
                        <Button
                            onClick={() => setThemeKey("theme5")}
                            variant={themeKey === "theme5" ? "contained" : "outlined"}
                        >
                            5
                        </Button>
                        <Button
                            onClick={() => setThemeKey("theme6")}
                            variant={themeKey === "theme6" ? "contained" : "outlined"}
                        >
                            6
                        </Button>
                    </ButtonGroup>*/}

                </Box>
            </Drawer>
        </>
    );
}
