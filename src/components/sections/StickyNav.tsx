"use client";

import {AppBar, Container, Link as MuiLink, Stack, Toolbar, Typography,} from "@mui/material";
import { clearHash } from "@/lib/clearHash";
import MobileDrawerMenu from "@/components/sections/MobileDrawerMenu";

type NavLink = { label: string; href: string };

type Props = {
    brand: string;
    links: NavLink[];
};

export default function StickyNav({ brand, links }: Props) {
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
                                    sx={{ fontSize: 14 }}
                                    onClick={() => {
                                        setTimeout(clearHash, 0);
                                    }}
                                >
                                    {l.label}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
