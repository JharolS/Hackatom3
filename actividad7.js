function number(){
    let i = prompt("Write the number");
    if(Boolean(i) === false) {
        alert("There is no number")
    } else if (i <= 100 ) {
        alert("Number less than 100, try again");
        number();
    } else {
        alert(i);
    }
}
number();   