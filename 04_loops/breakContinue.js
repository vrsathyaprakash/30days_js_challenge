for (let i=1;i<=10;i++){
    if(i==5){
        continue;
    }else{
        console.log(i)
    }
}

console.log('*'.repeat(20))

for (let i=1;i<=10;i++){
    if(i==7){
        break;
    }else{
        console.log(i)
    }
}