let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
const printList = (data) => {
    console.log(data.value)
    console.log(data.next.value)
    console.log(data.next.next.value)
    console.log(data.next.next.next.value)
}

printList(list)