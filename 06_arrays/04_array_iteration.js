arr=[1,2,3,4,5]

for(let i =0 ;i<arr.length;i++){
    console.log(arr[i])
}
console.log("*".repeat(50))
arr.forEach(element => {
    console.log(element*5)
});