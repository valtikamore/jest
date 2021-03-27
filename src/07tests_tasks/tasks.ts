export const sumFunc = (a:number,b:number) => a + b


export const sumFuncWithRestParams = (...numbers:number[]) => numbers.reduce((acc,el) => acc + el)



export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}
export type studentType = {
    name:string
    age:number
    isMarried:boolean
    scores:number
}
export type studentWithFriendsType = {
    name:string
    age:number
    isMarried:boolean
    scores:number
    friends:string[]
}
export type actionType = 'plus'|'minus'|'multi'|'divide'

export const copyStudent = (student:StudentType) => {
    return {...student}
}

export const deepCopyStudent = (student:StudentType) => {
    return {
        ...student,
        friends:{...student.friends}
    }
}

export function  calc (a:number,b:number,action:actionType) {
  switch (action ) {
      case 'plus': return  a + b
      case 'minus' : return a -b
      case 'multi': return a * b
      case 'divide': return a / b
      default : return 'Unknown action'
  }
}

export const addFriends = (students:studentType[]):studentWithFriendsType[] => students.map((st:studentType) => ({
    ...st,
    friends: students
        .map((s:studentType) => s.name)
        .filter((n:string) => n !== st.name)
}))

