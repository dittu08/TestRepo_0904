// map method
const arr = [1, 2, 3, 4, 5]

const fArr = arr.forEach((a, b, c) => {
    return a * 2
})
console.log(arr)

const mArr = arr.map((a, b, c) => {
    return a * 2
})
console.log(arr)

console.log(`foreach : ${fArr}, map : ${mArr}`)