"use client";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { TAGS } from "@/content/tags";
import { ALLERGENS } from "@/content/allergens";
import type { CategorizedMenu } from "@/content/menus/pizzeriaMeny";

type Props = {
    menu: CategorizedMenu;
    defaultExpandedIds?: string[];
    showIngredients?: boolean;
    showTags?: boolean;
    showAllergens?: boolean;
};

export default function CategorizedMenuSection({
                                                   menu,
                                                   defaultExpandedIds = ["pizza-classic"],
                                                   showIngredients = true,
                                                   showTags = true,
                                                   showAllergens = true,
                                               }: Props) {
    return (
        <Box id="menu" sx={{ py: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {menu.title}
            </Typography>

            <Stack spacing={1.5}>
                {menu.categories.map((cat) => (
                    <Accordion
                        key={cat.id}
                        defaultExpanded={defaultExpandedIds.includes(cat.id)}
                        disableGutters
                        elevation={0}
                        sx={{
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            "&:before": { display: "none" },
                            overflow: "hidden",
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
                                <Typography variant="h6">{cat.title}</Typography>
                                {cat.note && (
                                    <Typography variant="body2" color="text.secondary">
                                        {cat.note}
                                    </Typography>
                                )}
                            </Stack>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Stack spacing={1.25}>
                                {cat.items.map((it, idx) => {
                                    const title = it.number ? `${it.number}. ${it.name}` : it.name;

                                    return (
                                        <Box
                                            key={`${cat.id}-${it.number ?? it.name}-${idx}`}
                                            sx={{
                                                border: "1px solid",
                                                borderColor: "divider",
                                                borderRadius: 2,
                                                p: 1.5,
                                            }}
                                        >
                                            <Stack
                                                direction={{ xs: "column", sm: "row" }}
                                                spacing={1}
                                                sx={{
                                                    alignItems: { sm: "baseline" },
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
                                                <Typography sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
                                                    {it.price}
                                                </Typography>
                                            </Stack>

                                            {showIngredients && it.ingredients?.length ? (
                                                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                                                    {it.ingredients.join(", ")}
                                                </Typography>
                                            ) : null}

                                            {(showTags || showAllergens) && (
                                                <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
                                                    {showTags &&
                                                        it.tags?.map((t) => (
                                                            <Chip
                                                                key={`tag-${t}`}
                                                                size="small"
                                                                label={TAGS[t]?.label ?? t}
                                                                variant="outlined"
                                                            />
                                                        ))}

                                                    {showAllergens &&
                                                        it.allergens?.map((a) => (
                                                            <Chip
                                                                key={`allergen-${a}`}
                                                                size="small"
                                                                label={ALLERGENS[a]?.label ?? a}
                                                                variant="outlined"
                                                            />
                                                        ))}
                                                </Stack>
                                            )}
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Box>
    );
}
