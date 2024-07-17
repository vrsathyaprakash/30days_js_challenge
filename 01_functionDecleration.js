function evenOdd(n){
    if (n%2===0){
        console.log("even")
    }else{
        console.log("odd")
    }
}


evenOdd(4)
evenOdd(-4)
evenOdd(5)
evenOdd(0)


//hoisting function declaration can be called even before they are declared

square(5)
square(6)

function square(n){
    console.log(n*n)
}