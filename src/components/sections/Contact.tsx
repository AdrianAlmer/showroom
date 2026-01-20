import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import type { ContactData } from "@/templates/types";

export default function Contact({ title, phone, email, cta }: ContactData) {
    return (
        <Box id="kontakt" sx={{ py: 6 , scrollMarginTop: 20}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        {title}
                    </Typography>

                    <Stack spacing={0.5} sx={{ mb: 2 }}>
                        {phone && (
                            <Typography color="text.secondary">
                                Telefon: <a href={`tel:${phone}`}>{phone}</a>
                            </Typography>
                        )}
                        {email && (
                            <Typography color="text.secondary">
                                Email: <a href={`mailto:${email}`}>{email}</a>
                            </Typography>
                        )}
                    </Stack>

                    {cta && (
                        <Button variant="contained" href={cta.href}>
                            {cta.label}
                        </Button>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
