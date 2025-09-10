import {sumNumbers} from '../core/sumNumbers'

describe('string calculator', () => {
    it('should returns 0 if null or empty expression', () => {
        expect(sumNumbers(null)).toBe(0)
        expect(sumNumbers('')).toBe(0)
    })
    it('converts string to number', () => {
        expect(sumNumbers('1')).toBe(1)
    })
    it('returns the sum of all values separated by commas', () => {
        expect(sumNumbers('1,2')).toBe(3)
    })
    it('returns the sum of all values separated by commas', () => {
        expect(sumNumbers('1,2,3')).toBe(6)
    })
    it('does not increment the total in case of non numeric item', () => {
        expect(sumNumbers('a')).toBe(0)
        expect(sumNumbers('1,a')).toBe(1)
        expect(sumNumbers('1,a,2')).toBe(3)
        expect(sumNumbers('1a,2')).toBe(2)
    })
})