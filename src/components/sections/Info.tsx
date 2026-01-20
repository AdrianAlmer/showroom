import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import type { InfoData } from "@/templates/types";

export default function Info({ title, addressLines, openingHours }: InfoData) {
    return (
        <Box id="hitta-hit" sx={{ py: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }} textAlign="center">
                {title}
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <Card variant="outlined" sx={{ flex: 1 }}>
                    <CardContent >
                        <Typography variant="h6">Adress</Typography>
                        {addressLines.map((line) => (
                            <Typography key={line} color="text.secondary">
                                {line}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6">Öppettider</Typography>

                        <Stack spacing={0.5} sx={{ mt: 1 }}>
                            {openingHours.map((row) => (
                                <Stack
                                    key={row.label}
                                    direction="row"
                                    sx={{ justifyContent: "space-between", gap: 2 }}
                                >
                                    <Typography color="text.secondary">{row.label}</Typography>
                                    <Typography sx={{ whiteSpace: "nowrap" }}>{row.value}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
