// 배열
const arr = [1, 2, 3, 4, 5]

// 콜백 함수 : 객체(배열)에서 요소를 하나 꺼낸 후 매개변수로 그 요소를 전달하여 호출
arr.forEach((a, b, c) => {
    // console.log(`a : ${a}, b : ${b}, c : ${c}`) // 데이터, 인덱스, 객체
})

// Map, forEach
let map = new Map()
map.set(1, "a")
map.set(3, "c")
map.set(2, "b")

map.forEach((a, b, c) => {
    // console.log(`a : ${a}, b : ${b}, c : ${c}`)
})