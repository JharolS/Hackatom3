let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(list) {
    const filter1 = list.findIndex((element) => ['nap'].includes(element))
    const filter2 = list.findIndex((element) => ['teachers'].includes(element))
    const filter3 = list.findIndex((element) => ['ear'].includes(element))
    console.log (list[filter1],list[filter2],list[filter3])
    console.log (list[filter1])
}
aclean(arr);