const book ={
    title:"the man who sold his ferrari",
    author:"Robin Sharma",
    year:2000,
    details:function(){
        return `${this.title} written by ${this.author} in the year ${this.year}`
    },
    release_year:function(year){
        this.year=year
    }
}

console.log(book)
console.log(book.title)
console.log(book.author)
console.log(typeof(book))
console.log(book.details())
book.release_year(2012);
console.log(book.details())