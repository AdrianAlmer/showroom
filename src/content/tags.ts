export type TagId =
    | "vegetarian"
    | "vegan"
    | "meat"
    | "fish"
    | "spicy"
    | "gluten_free_option";

export const TAGS: Record<TagId, { label: string; short?: string }> = {
    vegetarian: { label: "Vegetarisk", short: "V" },
    vegan: { label: "Vegan", short: "VG" },
    meat: { label: "Kött" },
    fish: { label: "Fisk" },
    spicy: { label: "Stark", short: "🌶️" },
    gluten_free_option: { label: "Glutenfritt val", short: "GF" },
};
