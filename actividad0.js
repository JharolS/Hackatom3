function unique(arr) {
    let arr1 = arr.find((list) => ["Hare"].includes(list))
    let arr2 = arr.find((list) => ["Krishna"].includes(list))
    let arr3 = arr.find((list) => [":-O"].includes(list))
    console.log(arr1,arr2,arr3);
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

unique(values);

