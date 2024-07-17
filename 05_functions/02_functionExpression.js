const largeNum = function(a,b){
    if(a>b){
        console.log("a is greater than b")
    }else if(a<b){
        console.log("a is less than b")
    }else{
        console.log("a is equal to b")
    }
}

largeNum(5,3)
largeNum(5,5)
largeNum(3,5)

//no hoisting function expression  should be called after declaring

const concateString = function(a,b){
    console.log(a+b)
}

concateString("sathya","prakash")
concateString("vr",777)