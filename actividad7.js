const number = () => {
    const num = prompt('Write the number');
    if (Boolean(num) == false) {
        alert('Program Finished');
    } else if (num < 100) {
        num = prompt("Write the number")
        alert(num)
        number();
    } else {
        alert('Program Finished');
    }
    };
number();