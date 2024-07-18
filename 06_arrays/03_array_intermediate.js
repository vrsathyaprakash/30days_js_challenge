const arr = [1,2,3,4,5]

const arrDouble = arr.map( ele =>  2*ele)
console.log(arrDouble)

const arrEven = arr.filter( ele =>  (ele%2==0))
console.log(arrEven)

const arrSum = arr.reduce(
    function (total,ele){
        total+=ele
        return total
    }
)
console.log(arrSum)