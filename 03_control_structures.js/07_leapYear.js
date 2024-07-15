function leapYear(year){
    if((year % 4 ===0)&&((year % 100 !=0)
    ||((year % 100) ==0 && (year %400 ==0)))){
               console.log("leap year")
    }else{
        console.log("not a leap year")
    }
}

leapYear(1600)
leapYear(1601)
leapYear(1500)
leapYear(2008)
leapYear(2016)
leapYear(2009)