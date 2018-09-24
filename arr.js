let arr = [1,2,3,4,5];
arr.b='100'
for (let i =0;i<arr.length;i++){ //编程式
    console.log(arr[i])
}
// forEach 不支持return
arr.forEach(function (item) { //申明式 不关心如何执行
    console.log(item)
    //return
});
//区别：forEach; for in; for;for of 区别
for (let key in arr) {
    console.log(typeof key) //key会变字符串类型，可以遍历出数组的私有属性，比如arr.b='100'
}
let obj = {name:'张珊',age:"24"}
for (let val of arr){ //支持return 并且是（值of数组），不能遍历对象，如果要遍历对象可以利用Object.keys()方法 如表里obj
}
for (let val of Object.keys(obj)) {
    console.log(obj[val]) //Object.keys()将对象的key作为新的数组
}