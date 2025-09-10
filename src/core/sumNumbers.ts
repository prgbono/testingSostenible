export function sumNumbers (values: string) {
    if (!values) {
        return 0
    }
    if (values.includes(',')) {
        const items = values.split(',');
        const numbers = items.filter((item) => !isNaN(Number(item)))
        return numbers.map((value)=> Number(value)).reduce((acc, num) => acc + num, 0)
    }
    return Number(values) ? Number(values) : 0;
}