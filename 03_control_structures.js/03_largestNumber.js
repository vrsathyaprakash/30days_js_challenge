function largestNumber(a,b,c){
    if(a>b){
        if(a>c){
              console.log("a is largest")
        }else {
            console.log("c is largest")
        }
    }else if (b>a){
        if(b>c){
            console.log("b is largest")
        }else{
            console.log("c is largest")
        }
    }
}

largestNumber(1,2,3)
largestNumber(3,2,1)
largestNumber(2,3,1)
largestNumber(1,3,2)
largestNumber(2,1,3)
largestNumber(3,1,2)