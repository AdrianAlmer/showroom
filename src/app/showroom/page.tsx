
import {Container} from "@mui/material";
import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import Contact from "@/components/sections/Contact";

import {pizzeriaTemplate} from "@/templates/pizzeria";
import {pizzeriaMenu} from "@/content/menus/pizzeriaMeny"
import {getTodayOpeningText} from "@/lib/openingHours";
import CategorizedMenuSection from "@/components/sections/CategorizedMenu";
import StickyNav from "@/components/sections/StickyNav";




export default function ShowroomPage() {

    const todayText = getTodayOpeningText(pizzeriaTemplate.info)

    return (
        <>
        <StickyNav
           brand={pizzeriaTemplate.hero.title}
           links={[
               {label: "Meny", href: "#menu"},
               {label: "Hitta hit", href: "#hitta-hit"},
               {label: "Kontakta oss", href: "#kontakt"}
           ]}
        />
            <Container sx={{ py:4 }}>
                <Hero {...pizzeriaTemplate.hero}
                      todayText={todayText}
                />
                <CategorizedMenuSection menu={pizzeriaMenu} />
                <Info {...pizzeriaTemplate.info} />
                <Contact {...pizzeriaTemplate.contact} />
            </Container>
        </>
    );
}
