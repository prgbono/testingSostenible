import {isStrongPassword} from '../core/passwordValidator';

describe('Password Validator', () => {
    it('considers a password to be strong when all requirements are met', () => {
        expect(isStrongPassword('1234abcdABCD_')).toBe(true)
    })
    it('fails when the password is too short', () => {
        expect(isStrongPassword('1aA_')).toBe(false);
    })
    it('fails when the password does not contain any number', () => {
        expect(isStrongPassword('abcdABCD_')).toBe(false);
    })
    it('fails when the password does not contain any low case case', () => {
        expect(isStrongPassword('1234ABCD_')).toBe(false);
    })
    it('fails when the password does not contain any upper case', () => {
        expect(isStrongPassword('1234abcd_')).toBe(false);
    })
    it('fails when the password does not contain "_"', () => {
        expect(isStrongPassword('1234abcdABCD')).toBe(false);
    })
})