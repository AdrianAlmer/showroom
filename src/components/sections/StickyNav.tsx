import { AppBar, Box, Container, Link as MuiLink, Stack, Toolbar, Typography } from "@mui/material";

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
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {brand}
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                            {links.map((l) => (
                                <MuiLink
                                    key={l.href}
                                    href={l.href}
                                    underline="hover"
                                    color="text.secondary"
                                    sx={{ fontSize: 14 }}
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
