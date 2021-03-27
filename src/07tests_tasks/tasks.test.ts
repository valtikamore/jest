import {
    sumFuncWithRestParams,
    sumFunc,
    copyStudent,
    StudentType,
    deepCopyStudent,
    calc,
    addFriends,
    studentType, studentWithFriendsType
} from "./tasks";

test('summ of two integers', () => {
    //test data
    const a: number = 6
    const b: number = 4

    //performance code in test with data
    const result = sumFunc(a, b)
    // check result
    expect(result).toBe(10)
})
test('sum of all params', () => {
    const a: number = 6
    const b: number = 4
    const c: number = 4
    const d: number = 4
    const e: number = 4


    const result2 = sumFuncWithRestParams(b, c, e)
    const result3 = sumFuncWithRestParams(a, b, c, d, e)

    expect(sumFuncWithRestParams(a, b, c, d, e)).toBe(22)
    expect(result2).toBe(12)
    expect(result3).toBe(22)
})
test('student copy test', () => {
    const studentValentine: StudentType = {
        name: 'Valentine',
        isStudent: true,
        friends: ['Books']
    }


    expect(copyStudent(studentValentine)).not.toBe(studentValentine)
    expect(copyStudent(studentValentine).friends).toBe(studentValentine.friends)


})
test('student shallows test', () => {
    const studentNatalia = {
        name: 'Natalia',
        isStudent: false,
        friends: ['Coffee']
    }

    expect(copyStudent(studentNatalia)).not.toBe(studentNatalia)
    expect(deepCopyStudent(studentNatalia).friends).not.toBe(studentNatalia.friends)


})
test('student test', () => {
    const studentNatalia = {
        name:'Natalia',
        isStudent:false,
        friends:['Coffee']
    }

    expect(copyStudent(studentNatalia)).not.toBe(studentNatalia)
    expect(deepCopyStudent(studentNatalia).friends).not.toBe(studentNatalia.friends)


})
test('calculator', () => {
    const bigInt: number = 9999999
    expect(calc(bigInt, bigInt, 'multi')).toBe(99999980000001)
    expect(calc(bigInt, bigInt, 'plus')).toBe(19999998)
    expect(calc(bigInt, bigInt, 'minus')).toBe(0)
    expect(calc(bigInt, bigInt, 'divide')).toBe(1)
})

test('students friends length', () => {
    const students = [
        {name: "Bob", age: 22, isMarried: true, scores: 85},
        {name: "Alex", age: 21, isMarried: true, scores: 90},
        {name: "Nick", age: 20, isMarried: false, scores: 120},
        {name: "John", age: 19, isMarried: false, scores: 100},
        {name: "Helen", age: 20, isMarried: false, scores: 110},
        {name: "Ann", age: 20, isMarried: false, scores: 105},
    ];
    expect(addFriends(students)[0].friends.length).toBe(5)
})

test('students friends names', () => {
     const addFriends = (students:studentType[]):studentWithFriendsType[] => students.map((st:studentType) => ({
        ...st,
        friends: students
            .map((s:studentType) => s.name)
            .filter((n:string) => n !== st.name)
    }))
    const students = [
        {name: "Bob", age: 22, isMarried: true, scores: 85},
        {name: "Bob", age: 21, isMarried: true, scores: 90},
        {name: "Nick", age: 20, isMarried: false, scores: 120},
        {name: "John", age: 19, isMarried: false, scores: 100},
        {name: "Ann", age: 20, isMarried: false, scores: 110},
        {name: "Ann", age: 20, isMarried: false, scores: 105},
    ];
    expect(addFriends(students)[0].friends.length).toBe(4)
    expect(addFriends(students)[0].friends.includes('Bob')).toBe(false)
    expect(addFriends(students)[0].friends.includes('Nick')).toBe(true)
})

