import {fibonacci} from '../core/fibonacci'
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

describe('Fibonacci', () => {
    it('returns 0 when value given is 0', () => {
        expect(fibonacci(0)).toBe(0)
    })
    it('returns 1 when value given is 1', () => {
        expect(fibonacci(1)).toBe(1)
    })
    it('is a series where the value for a number is the addition of the preceding 2 values', () => {
        expect(fibonacci(2)).toBe(fibonacci(1) + fibonacci(0))
        expect(fibonacci(10)).toBe(fibonacci(9) + fibonacci(8))
    })
})