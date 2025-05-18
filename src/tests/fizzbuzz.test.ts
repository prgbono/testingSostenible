import {fizzBuzz} from "../core/fizzbuzz";

describe('Fizzbuzz', ()=>{
    it('returns number one as a string for number one', ()=>{
        expect(fizzBuzz(1)).toBe('1')
    })
    it('returns number two as a string for number two', ()=>{
        expect(fizzBuzz(2)).toBe('2')
    })
    it('returns fizz as a string for number three', ()=>{
        expect(fizzBuzz(3)).toBe('fizz')
    })
    it('returns buzz as a string for number five', ()=>{
        expect(fizzBuzz(5)).toBe('buzz')
    })
    it('returns fizzbuzz as a string for number fifteen', ()=>{
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })
    it('returns fizz as a string for any number divisible by three', ()=>{
        expect(fizzBuzz(6)).toBe('fizz')
    })
    it('returns buzz as a string for any number divisible by five', ()=>{
        expect(fizzBuzz(10)).toBe('buzz')
    })
    it('returns fizzbuzz as a string for any number divisible by fifteen', ()=>{
        expect(fizzBuzz(30)).toBe('fizzbuzz')
    })
    it('returns number as a string for any number that is not divisible by three or fife and is > 1', ()=>{
        expect(fizzBuzz(17)).toBe('17')
    })
})

