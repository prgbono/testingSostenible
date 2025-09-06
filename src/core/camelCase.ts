export const toCamelCase = (text: string) => {
    const words = text.split(/[ _-]/)
    return words.map((word) => word.charAt(0).toUpperCase() + word.substr(1)).join('');
}

