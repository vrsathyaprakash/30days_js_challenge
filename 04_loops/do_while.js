let i=1
do{
   console.log(i)
   i++
}while(i<=5)


function factorial(n){
   let fact=1
   let i=1
   do{
      fact=fact * i
      i++
   }while(i<=n)
   console.group(fact)
}

factorial(6)