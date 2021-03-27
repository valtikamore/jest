// 1. Функция принимает параметром целые положительные числа и возвращает
// их сумму.

export const sum = (a:number,b:number,...numbers:number[]) => {
    console.log(a+b)
    return numbers.reduce((acc, el) => acc + el)
}
// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export const getTriangleType = (a:number,b:number,c:number) => {
//    if(a===b ) {
//        return '01'
//    } else if (a === b  && b === c && a === c  ) {
//        return '10'
//    } else if (c === b && b <a && c<a) {
//        return '00'
//    } else {
//        return '11'
//    }
// }
export const getTriangleType = (a:number,b:number,c:number):string => {
    if(  a  + b > c && b + c > a && c + a > b) {
        if(a === b || b === c || c === a) {
            return '10'
        } else if (a === b && b === c ) {
            return '01'
        }
        else {
            return '11'
        }
    } else {
        return '00'
    }
}
export const getSum = (number:number) : number => {
    return number.toString().split('').reduce((acc,el) => +acc + +el,0)
}
const number12:number = 12
console.log(number12.toString().split('').reduce((acc,el)=> +acc + +el,0))

// export function getSum(a: number) {
//     let temp = a.toString();
//     let sum = 0;
//
//     for(let i = 0; i < temp.length; i++) {
//         const res = temp.charAt(i);
//         sum += +res;
//     }
//     return sum
// }
// export function getSum (number:number) {
//     let sum =0
//     for (;number>0;number = Math.trunc(number/10)) {
//         sum += number %10
//     }
//     return sum
// }
// if (summ odd arrOfNumbers[i] > summ even arrOfnumbers[i])  {
//     return true
// } else false

export const isEvenIndexSumGreater = (arrOfNumbers:number[]) => {
    let even = 0
    let odd = 0
    for (let i = 0 ; i < arrOfNumbers.length;i++) {
        if (i % 2 === 0) {
           even += arrOfNumbers[i]
        } else {
            odd += arrOfNumbers[i]
        }
    }
    return even > odd
}
// export function isEvenIndexSumGreater(array: number[]) {
//     let odd = 0
//     let even = 0
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             even += array[i]
//         } else {
//             odd += array[i]
//         }
//     }
//     return even > odd
// }
//  export const isEvenIndexSumGreater = (arr:number[]) => {
//     const sum = arr.map((el,i) => {
//         if(i % 2 === 0) {
//
//         }
//     })
//  }
 ///

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.


export const isSquareGreater = (circle:number,square:number)  => {
    let circleArea = Math.PI * (circle*2)
    let squareArea = square ** 2
    return circleArea >= squareArea
}



// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export const getBanknoteList = (x:number) => {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const resultBanknots:number[] = []
        if(x > 0) {
            for (let i = 0; i < banknotes.length; i++) {
                let note = banknotes[i]
                while (x - note >= 0 ) {
                    x -= note
                    resultBanknots.push(note)
                }
            }
        } else {
            console.log('')
    }

    return resultBanknots
}