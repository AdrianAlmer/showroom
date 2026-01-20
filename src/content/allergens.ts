export type AllergenId =
    | "gluten"
    | "milk"
    | "egg"
    | "nuts"
    | "sesame"
    | "soy"
    | "mustard";

export const ALLERGENS: Record<AllergenId, { label: string; short?: string }> = {
    gluten: { label: "Gluten", short: "GL" },
    milk: { label: "Mjölk", short: "MLK" },
    egg: { label: "Ägg", short: "ÄGG" },
    nuts: { label: "Nötter", short: "NÖT" },
    sesame: { label: "Sesam", short: "SES" },
    soy: { label: "Soja", short: "SOJ" },
    mustard: { label: "Senap", short: "SEN" },
};
