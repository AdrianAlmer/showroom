import type { TagId } from "@/content/tags";
import type { AllergenId } from "@/content/allergens";

export type HeroData = {
    title: string;
    subtitle?: string;
    primaryCta?: { label: string; href?: string };
    secondaryCta?: { label: string; href?: string };
};

export type MenuData = {
    title: string;
    items: MenuItemData[];
};

export type InfoData = {
    title?: string;
    addressLines: string[];
    openingHours: { label: string; value: string }[]; // display
    weeklyHours?: WeeklyHours; // machine-readable

    closedDates?: string[]; // YYYY-MM-DD
    closedDatesRecurring?: string[]; // MM-DD
};

export type ContactData = {
    title: string;
    phone?: string;
    email?: string;
    cta?: { label: string; href: string };
    socials: socialsData;
};

export type socialsData = {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    tiktok?: string;
}

export type TemplateData = {
    id: string;
    name: string;
    hero: HeroData;
    menu?: MenuData;
    info: InfoData;
    contact: ContactData;

};

export type WeeklyHours = {
    mon?: string;
    tue?: string;
    wed?: string;
    thu?: string;
    fri?: string;
    sat?: string;
    sun?: string;
};


export type MenuItemData = {
    name: string;
    description?: string;
    price?: string;

    ingredients?: string[];
    tags?: TagId[];
    allergens?: AllergenId[];
};

export type MenuCategoryData = {
    id: string;
    title: string;
    note?: string; // t.ex. “Nr 1–15”
    items: MenuItemData[];
};

export type CategorizedMenuData = {
    title: string;
    categories: MenuCategoryData[];
};

