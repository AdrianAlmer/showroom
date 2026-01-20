"use client"


import {Box, Typography, Stack, Button, Card, CardContent} from "@mui/material";
import type {HeroData} from "@/templates/types";



type HeroProps = HeroData & {
    todayText?: string | null;
}


export default function Hero({ title, subtitle, primaryCta, secondaryCta, todayText }: HeroProps) {



    return (
        <Box
            sx={{
                py: { xs: 4, sm: 6 },
                borderRadius: 3,
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                position: "relative",
                overflow: "hidden",
                boxShadow: 1,
            }}
        >
            {/* bakgrundsbild får byta till nått sen, gradiant så länge */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(900px circle at 20% 10%, rgba(198,40,40,0.12), transparent 55%), radial-gradient(900px circle at 80% 30%, rgba(46,125,50,0.10), transparent 55%)",
                    pointerEvents: "none",
                }}
            />

            <Box sx={{ position: "relative", px: { xs: 2, sm: 4 } }}>

                <Stack spacing={2}>
                    <Typography variant="h3" component="h1" sx={{ letterSpacing: -0.5 }}>
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 680 }}>
                            {subtitle}
                        </Typography>
                    )}

                    <Stack direction="row" spacing={2} sx={{ pt: 1, flexWrap: "wrap" }}>
                        {primaryCta && (
                            <Button variant="contained" href={primaryCta.href}>
                                {primaryCta.label}
                            </Button>
                        )}
                        {secondaryCta && (
                            <Button variant="outlined" href={secondaryCta.href}>
                                {secondaryCta.label}
                            </Button>
                        )}
                    </Stack>

                    {/*info rad*/}
                    <Card variant="outlined" sx={{ mt: 2, width: "100%" }}>
                        <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={1.5}
                                sx={{ justifyContent: "space-between" }}
                            >
                                <Typography color="text.secondary">
                                    🍕 Upphämtning & servering
                                </Typography>
                                <Typography color="text.secondary">
                                    🕒 Öppettider: {todayText}
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Box>
    )
}