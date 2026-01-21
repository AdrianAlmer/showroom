"use client";

import * as React from "react";
import {Drawer,Box,IconButton,Stack,Typography,Divider,List,ListItemButton,ListItemText,Button,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {clearHash} from "@/lib/clearHash";

type NavLink = { label: string; href: string };

type Props = {
    brand: string;
    links: NavLink[];
    cta?: { label: string; href: string };
};

export default function MobileDrawerMenu({ brand, links, cta }: Props) {
    const [open, setOpen] = React.useState(false);

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
                        sx: { width: 320, maxWidth: "85vw" },
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
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
                </Box>
            </Drawer>
        </>
    );
}
