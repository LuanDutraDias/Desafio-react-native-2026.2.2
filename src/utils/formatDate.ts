export function formatDateToBrasilia(isoDate: string): string {
    const date = new Date(isoDate);

    return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
}