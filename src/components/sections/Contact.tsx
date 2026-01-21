import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import type { ContactData } from "@/templates/types";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";


export default function Contact({ title, phone, email, cta, socials }: ContactData) {
    const hasSocials = Boolean(socials?.linkedin || socials?.twitter || socials?.facebook || socials?.instagram || socials?.tiktok);
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
                                Telefon:{" "}
                                <MuiLink href={`tel:${phone}`} underline="hover" color="text.primary">
                                    {phone}
                                </MuiLink>
                            </Typography>
                        )}
                        {email && (
                            <Typography color="text.secondary">
                                Email:{" "}
                                <MuiLink href={`mailto:${email}`} underline="hover" color="text.primary">
                                    {email}
                                </MuiLink>
                            </Typography>
                        )}
                        {hasSocials && (
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                                <Typography color="text.secondary">
                                    Följ oss:
                                </Typography>

                                <Stack direction="row" spacing={0.5} sx={{ mt: 0.5 }}>
                                    {socials?.facebook && (
                                        <IconButton
                                            size="small"
                                            component="a"
                                            href={socials.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            sx={{
                                                color: "text.primary","&:hover": {color: "primary.main"}, p:0.5
                                            }}
                                        >
                                            <FacebookIcon fontSize="small" />
                                        </IconButton>
                                    )}

                                    {socials?.instagram && (
                                        <IconButton
                                            size="small"
                                            component="a"
                                            href={socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            sx={{
                                                color: "text.primary","&:hover": {color: "primary.main"}, p:0.5
                                            }}
                                        >
                                            <InstagramIcon fontSize="small" />
                                        </IconButton>
                                    )}

                                    {socials?.tiktok && (
                                        <IconButton
                                            size="small"
                                            component="a"
                                            href={socials.tiktok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="TikTok"
                                            sx={{
                                                color: "text.primary","&:hover": {color: "primary.main"}, p:0.5
                                            }}
                                        >
                                            <TikTokIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                    {socials?.twitter && (
                                        <IconButton
                                            size="small"
                                            component="a"
                                            href={socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                            sx={{
                                                color: "text.primary","&:hover": {color: "primary.main"}, p:0.5
                                            }}
                                        >
                                            <TwitterIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                    {socials?.linkedin && (
                                        <IconButton
                                            size="small"
                                            component="a"
                                            href={socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            sx={{
                                                color: "text.primary","&:hover": {color: "primary.main"}, p:0.5
                                            }}
                                        >
                                            <LinkedInIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </Stack>
                            </Stack>
                        )}
                    </Stack>

                    {/*{cta && (

                        <Button variant="contained" href={cta.href}>
                            {cta.label}
                        </Button>
                    )}*/}
                </CardContent>
            </Card>
        </Box>
    );
}
