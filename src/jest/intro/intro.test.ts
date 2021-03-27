import {nativeNull, sum} from "./intro";

describe('sum function : ',()=> {
    test(' should return sum of two integers',() => {
        expect(sum(3,4)).toBe(7)
    })
    test(' should return value correctly comparing to other values',() => {
        expect(sum(3,4)).toBeGreaterThan(6) // >
        expect(sum(3,4)).toBeGreaterThanOrEqual(7) // >=
        expect(sum(3,4)).toBeLessThanOrEqual(7) // <=
        expect(sum(3,4)).toBeLessThan(8) // <
    })

    test(' should sum 2 float values correctly',() => {
        expect(sum(0.2,0.3)).toBe(0.5) // false
        expect(sum(0.2,0.3)).toBeCloseTo(0.5) // true
    })
})

describe('Native null function',()=> {
    test(' should return false value null',()=> {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})
