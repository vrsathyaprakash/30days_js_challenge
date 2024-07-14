function compare1(a,b){
    if (a<b){
        console.log("a is less than b")
    }else if(a>b){
        console.log("a is greater than b")
    }else{
        console.log("a is equal to b")
    }
}

function compare2(a,b){
    if (a<=b){
        console.log("a is less than or equal to b")
    }else if(a>=b){
        console.log("a is greater than or equal to b")
    }
}


function compare3(a,b){
    if (a===b){
        console.log("a is strictly equal to b and of same data type")
    }else if(a==b){
        console.log("a may be eqaul to b but not of same data type")
    }
}

compare1(5,6)
compare2(5,6)
compare3(5,5)
compare3(5,"5")