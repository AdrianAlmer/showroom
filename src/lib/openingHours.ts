import type { InfoData } from "@/templates/types";

function pad2(n: number) {
    return String(n).padStart(2, "0");
}

function formatYYYYMMDD(d: Date) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function formatMMDD(d: Date) {
    return `${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

const dayKey = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

export function getTodayOpeningText(info: InfoData): string {
    const today = new Date();
    const ymd = formatYYYYMMDD(today);
    const mmdd = formatMMDD(today);

    // 1) stängt-dagar först
    if (info.closedDates?.includes(ymd) || info.closedDatesRecurring?.includes(mmdd)) {
        return "Stängt idag";
    }

    // 2) annars dagens timmar
    const weekly = info.weeklyHours;
    if (!weekly) return "Öppettider saknas";

    const key = dayKey[today.getDay()];
    const hours = weekly[key];

    return hours ? hours : "Stängt idag";
}
