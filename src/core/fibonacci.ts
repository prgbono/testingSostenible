export const fibonacci = (value: number) => {
    if (value === 0) return 0
    if (value === 1) return 1
    if (value === 2) return 1
    return (fibonacci(value-1) + fibonacci(value-2))
}