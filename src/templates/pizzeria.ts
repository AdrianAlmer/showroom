import {TemplateData} from "@/templates/types";

export const pizzeriaTemplate: TemplateData = {
    id: "pizzeria",
    name: "Pizzeria",
    hero: {
        title: "Yoshis Pizzeria",
        subtitle: "Äkta mammamia pizza runt hörnet.",
        /*primaryCta: { label: "Kontakta oss", href: "#kontakt" },*/
        image:{
            src: "/images/pizza/pizza1.webp",
            alt: "Bild på en pizza",
            opacity: 0.18,
            position: "center",
        },

    },
    info: {
        /*title: "Hitta hit",*/
        addressLines: ["Storgatan 12", "123 45 vänern"],
        openingHours: [
            { label: "Mån–Fre", value: "11:00–21:00" },
            { label: "Lör", value: "12:00–22:00" },
            { label: "Sön", value: "12:00–20:00" },
        ],
        weeklyHours: {
            mon: "11:00–21:00",
            tue: "11:00–21:00",
            wed: "11:00–21:00",
            thu: "11:00–21:00",
            fri: "11:00–21:00",
            sat: "12:00–22:00",
            sun: "12:00–20:00",
        },
        closedDatesRecurring: ["12-24", "12-25", "12-26", "01-01"],
        closedDates: ["2026-06-27"]
    },
    contact: {
        title: "Kontakta oss",
        phone: "+46 12 345 67 89",
        email: "hej@yoshispizzeria.se",
        /*cta: { label: "Ring nu", href: "tel:+46123456789" },*/
        socials:{
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/in/",
            tiktok: "https://www.tiktok.com/",
        },
    },


};
