function printPyramid(rows){
    for (let i = 1; i <=rows; i++) {
        let space = ' '.repeat(rows-i);
        let stars = "*".repeat(2 * i - 1)
        console.log(space + stars);  
    }
}
printPyramid(6)