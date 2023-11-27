export function formatPhone(value: string): string {
    if (value[5] === "0") {
        return value.replace(" 0", "").replace("+", "");
    }
    return value.replace(" ", "").replace("+", "");
}

export function unformatNumber(value: string): string {
    return value.replace(/^(\d{3})(\d{9})$/g, "+$1 $2");
}
