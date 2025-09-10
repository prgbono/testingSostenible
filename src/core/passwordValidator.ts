function hasNumber(str: string): boolean {
    return /\d/.test(str);
}

function hasLowercase(str: string): boolean {
    return /[a-z]/.test(str);
}

function hasCapitalCase(str: string): boolean {
    return /[A-Z]/.test(str);
}

export const isStrongPassword = (pass: any) => {
    return pass.length >= 6 && hasNumber(pass) && hasLowercase(pass) && hasCapitalCase(pass) && pass.includes('_')
}