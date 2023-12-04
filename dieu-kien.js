// // tìm số lớn nhất trong mảng theo 2 cách là tìm theo giá trị và tìm theo index
//
// let arr = [3, -6, 8, -9, -4, 5, 12,7]
// let test = [...arr]
// for (let i = 1; i < test.length; i ++){
//     if (test[i] > test[0]){
//         test[0] = test[i]
//     }
// }
// console.log(test[0])
// console.log(arr.indexOf(test[0]))
//
//
//
// let imax = 0
// for (let i = imax + 1; i < arr.length; i ++){
//     if (arr[i] > arr[imax]){
//         imax = i
//     }
// }
// console.log(imax)


//
//
// function tìmTấtCảVịTríCủaGiáTrị(arr, x) {
//     const a = [];
//     let c = 0;
//     let d = arr.length - 1;
//
//     while (c <= d) {
//         const b = Math.floor((c + d) / 2);
//         if (arr[b] === x) {
//             a.push(b);
//
//             // Tìm các giá trị bên trái
//             let i = b - 1;
//             while (i >= 0 && arr[i] === x) {
//                 a.push(i);
//                 i--;
//             }
//
//             // Tìm các giá trị bên phải
//             i = b + 1;
//             while (i < arr.length && arr[i] === x) {
//                 a.push(i);
//                 i++;
//             }
//
//             return a;
//         } else if (arr[b] < x) {
//             c = b + 1;
//         } else {
//             d = b - 1;
//         }
//     }
//
//     return a;
// }
//
// const arr = [10, 20, 30, 20, 90, 100, 40, 50, 60];
// const x = 20;
// const a = tìmTấtCảVịTríCủaGiáTrị(arr, x);
//
// console.log(`Tìm thấy giá trị ${x} tại các chỉ mục: ${a.join(", ")}`);


// const { log } = require("console");


// Bài Nổi Bọt

// let arr = [0, 1, 2,-100, 9,5,2,1]
// function test(arr) {
//     let sum = 0
//     while (sum < arr.length - 1) {
//         sum = 0
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] <= arr[i + 1]) {
//                 sum += 1
//
//             } else {
//                 let term = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = term
//             }
//         }
//     }
//     console.log(arr, sum)
// }


// function test(arr) {
//     let sum = 1;
//
//     while (sum > 0) {
//         sum = 0;
//
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//
//                 sum += 1;
//             }
//         }
//     }
//
//     console.log(arr);
// }
// test(arr)


// let sum = 0
// do{
//     sum = 0
// for (let i  = 0; i <= arr.length -2; i++){
//     if (arr[i] <= arr[i+1]){
//         sum += 1
//     }else {
//         let temp = arr[i];
//                  arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//     }
// }
// }while (sum < arr.length - 1)
//
//
// console.log(arr)


// kiểm tra số nguyên
//  let num = 3.5;
// console.log(Number.isInteger(num))


// Bài 1 : Tổng 2 số trong mảng
// nums = [2,5,5,11]; target = 10
//  function test(nums, target) {
//     let arr = []
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 if (arr.indexOf(i) === -1 && arr.indexOf(j) === -1 && i !== j)
//                 arr.push(i,j)
//             }
//         }
//     }
//     console.log(arr)
//


//      for(let i = 0; i < nums.length; i ++){
//          let flag = target - nums[i]
//              if (arr.indexOf(i) === -1 && arr.indexOf(flag) === -1 && i !== arr.indexOf(flag) ){
//                  arr.push(nums.indexOf(flag), i)
//
//              }
//
//
//      }
//      console.log(arr)
// }
//
// test(nums,target)


// Bài 2: Tổng 2 mảng
//
// let l1 = [2,4,3]
// let l2 = [5,6,4]
//
//
//
// let test1 = ""
// for (let i = 0; i < l1.length; i ++){
//     test1 += l1[i]
// }
//
// let test2 = ""
// for (let i = 0; i < l2.length; i ++){
//     test2 += l2[i]
// }

//
// let a = Number(test2)
// let b = Number(test1)
// let result = a + b
//  let oob = result.toString()
//
// let c = oob.split("")
// c.reverse()
// let d = []
// for (let i = 0; i < c.length; i ++){
//     d.push(c[i]*1)
// }
// console.log(d)


// Bài 4: tìm trung vị của 2 mảng
//
// let nums1 = [3]
// let nums2 = [-2,-1]
// let result;
// let arr = [...nums1, ...nums2]
//  let test = arr.sort((a, b) => a - b)
//
// if (test.length % 2 === 0){
//     result = (test[(test.length / 2)] + test[(test.length / 2) - 1] )/2
// }else {
//     result = test[Math.floor((test.length / 2))]
// }
// console.log(result)


// Bài 7: Đảo ngược số
//
// let x =1534236469
// if (x > 0){
//     let arr = x.toString().split("")
//     let flag = ""
//     for (let i = arr.length-1; i >= 0; i--){
//         flag += arr[i]
//     }
//     let result = flag*1
//
//     if (Math.pow(-2, 31) <= result && result <= Math.pow(2, 31) - 1){
//         console.log(1)
//     }else {
//         console.log(0)
//     }
//
// }else {
//     let test = x*(-1)
//     let arr = test.toString().split("")
//     let flag = ""
//     for (let i = arr.length-1; i >= 0; i--){
//         flag += arr[i]
//     }
//     let result = flag*(-1)
//     if (Math.pow(-2, 31) <= result && result <= (Math.pow(2, 31) - 1)){
//         console.log(result)
//     }else {
//         console.log(0)
//     }
// }


// Bài test thuật toán số 1: Tìm điểm chung của các mảng con trong 1 mảng to

// let arr = [[2, 3, 5]]
// let result = []
// function test(arr) {
//     for (let i = 0; i < arr.length; i++){
//
//         if (Array.isArray(arr[i]) === false ){
//             console.log("mảng không cùng kiểu dữ liệu")
//
//              return null
//         }
//     }
//
//     for (let i = 1; i < arr.length; i++) {
//         result = result.concat(arr[i])
//     }
//
//
//     let sum
//     for (let i = 0; i < arr[0].length; i++) {
//         sum = 0
//         for (let j = 0; j < result.length; j++) {
//             if (arr[0][i] === result[j]) {
//                 sum += 1
//             }
//         }
//
//         if (sum === arr.length - 1) {
//             console.log(arr[0][i])
//         }
//     }
// }
// test(arr)


// Tìm số lớn nhất và vị trí của số đó

// let arr = [1,0,9,8,6,10]
// let max = 0
// for (let i = 1; i < arr.length; i ++){
//     if (arr[max] < arr[i]){
//         max = i
//     }
// }
// console.log(max, arr[max])


// In ra các số nguyên tố trong mảng và tính tổng của chúng

// let arr = [ 4, 7, 18, 28, 29, 24, 8,  26,  17,  0, 21, 14, 23]
// let flag = false
// for (let i = 0; i < arr.length  ; i++) {
//         for (let j = 2; j < arr[i]-1 ; j++) {
//
//             if (arr[i] % j === 0) {
//                 flag = true
//                 break
//             }
//
//             if (flag === true){
//
//                 console.log(arr[i])
//                 break
//             }
//         }
//
//
//
// }

// Bài toán tìm điểm chung trong mảng mà các mảng con có thể trùng lặp số
// let arr = [[1, 2, 3]]
// let result = []
// let flag = [...new Set(arr[0])]
// let flags = false
//
// if (arr.length === 0) {
//     console.log("mảng rỗng")
// } else {
//     for (let i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             flags = true
//             break
//         }
//     }
//     if (flags === true) {
//         console.log("mảng không hợp lệ")
//     } else {
//         for (let i = 1; i < arr.length; i++) {
//             for (let j = 0; j < flag.length; j++) {
//                 for (let k = 0; k < arr[i].length; k++) {
//                     if (flag[j] === arr[i][k]) {
//                         result.push(flag[j])
//                         break
//                     }
//                 }
//             }
//             flag = result
//             result = []
//         }
//         console.log(flag)
//     }
// }
//
//


// Bài tập phân laoij và sắp xếp đậu theo stt từ lớn đến be
// let arr = [{name: "đỏ", stt: 6},
//                                      {name: "đỏ", stt: 1},
//                                    {name: "xanh", stt: 15},
//                                      {name: "đỏ", stt: 5},
//                                     {name: "xanh", stt: 5},
//                                     {name: "xanh", stt: 9},
//                                     {name: "xanh", stt: 11}  ]
// let result = []
//
// function test(arr) {
//     if (arr.length < 2){
//         return arr
//     }
//     let left = []
//     let right = []
//
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].name === "xanh"){
//             if (arr[i].stt >= arr[0].stt){
//                 left.push(arr[i])
//             }if (arr[i].stt < arr[0].stt){
//                 right.push(arr[i])
//
//             }
//
//         }
//     }
//
//       result = [...test(left), ...test(right)]
//
//       return  result
// }
// test(arr)
// console.log(result)



// Bài toán tìm kiếm tuần tự
// let arr = [1,5,6,2,9,4,6,6]
// let result = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 6){
//         result.push(i)
//     }
// }
// console.log(result)


// Bài toán sắp xếp nhanh
// let result = []
// function test(arr) {
//     if (arr.length < 2 ){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length -1 ; i ++){
//         if (arr[i] <= pivot){
//             left.push(arr[i])
//         }else {
//             right.push(arr[i])
//         }
//     }
//
//      result =    [...test(left),pivot,...test(right)]
//     return result
// }
//
// test(arr)
// console.log(result)
// let arr = [1, 5, 6, 2, 9, 4, 6, 6]
// let sum = 1
// while (sum < arr.length -1){
//     sum = 0
//     for (let i = 0; i < arr.length -1; i ++){
//         if (arr[i] <= arr[i+1]){
//             sum +=1
//         }else {
//
//
//         }
//     }
// }
//
// console.log(arr)


// for (let i = 0; i < 4; i++) {
//     let row = ""
//     for (let k = 0; k < 7 - i; k++) {
//         row += " "
//     }
//     for (let j = 3 - i; j <= 3 + i; j++) {
//         row += "*"
//     }
//     console.log(row)
// }
//
// for (let i = 0; i < 3; i++) {
//     let result = ""
//     for (let j = 1; j < 6; j++) {
//         result += " "
//     }
//     for (let j = 1; j < 6; j++) {
//         result += "*"
//     }
//     console.log(result)
// }


// Bài 1: tính tổng  mảng arr =[1,2,3,4,5,6,7,8,9]

let arr = [1,2,3,4,5,6,7,8,9]
let total = arr.reduce((current, item)=>{
    return current += item
},0)
console.log(total)



// Bài 2:
input = [ 1, 2, 3, 4, 5 ];

let result = []
for (let i = 0; i < input.length; i++){
    result.push(input[i]*input[i])
}
console.log(result)



// Bài 3:
// "Cho 2 mảng
 a = [1,2,3,4,5]
 b = [6,7,8,9,10]
// lấy ra các số chẵn đẩy vào arr1 , số lẻ vào arr2 và tính tổng"

let result = [...a,...b]
let arr1 = []
let arr2 = []
result.map(item =>{
 if (item % 2 !== 0){arr1.push(item)}
 else {arr2.push(item)}
})
let total1 = arr1.reduce((current,item)=>{return current += item},0)
let total2 = arr2.reduce((current,item)=>{return current += item},0)




// Bài 4:
// "Cho 2 mảng
a = [1,2,3,4,5]
b = [6,5,4,3,9]
 // lấy ra các phần tử trùng và đẩy vào mảng arr1 = []
 // các phần tử k trùng đẩy vào arr2 = []"
let arr1 = []
let arr2 = []
let flag = false

a.map(item=>{
    for (let i = 0; i < b.length;i++){
        if (item === b[i]){
            arr1.push(item)
        }
    }
})

for (let i = 0; i < a.length; i++){
    let flag = false
    for (let j = 0; j < arr1.length; j ++){
        if (a[i] === arr1[j]){
           flag = true
            break
        }
    }
    if (flag === false){
        arr2.push(a[i])
    }
}

for (let i = 0; i < b.length; i++){
    flag = false
    for (let j = 0; j < arr1.length; j ++){
        if (b[i] === arr1[j]){
           flag = true
            break
        }
    }
    if (flag === false){
        arr2.push(b[i])
    }
}
console.log(arr2)

// Bài 5:
// tính tổng của mảng
 input = [ 1, -4, 12, 0, -3, 29, -150]
let total = input.reduce((current, item)=>{
    return current += item
},0)
console.log(total)
// Result -115
