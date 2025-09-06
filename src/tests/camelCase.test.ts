import {toCamelCase} from '../core/camelCase'
describe('camelCase tests', () => {
    it('Allows empty string', () => {
        expect(toCamelCase('')).toBe('');
    })
    it('Allows capitalised word', () => {
        expect(toCamelCase('Foo')).toBe('Foo')
    })
    it('Joins the capitalised words that are separared by spaces', ()=> {
       expect(toCamelCase('Foo Bar')).toBe('FooBar')
    });
    it('Joins the capitalised words that are separared by hyphens', () => {
        expect(toCamelCase('Foo_Bar-Foo')).toBe('FooBarFoo')
    })
    it('converts the first character of one word to uppercase', () => {
        expect(toCamelCase('foo')).toBe('Foo')
    })
    it('converts the first character of each word to uppercase', () => {
        expect(toCamelCase('foo_bar-foo')).toBe('FooBarFoo')
    })
})