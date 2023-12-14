function duplicate(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] === arr1[j]) {
                flag = true
                break;
            }
        }   
        if (!flag) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

console.log(duplicate([1, 2, 3, 4,4, 2, 5, 6, 1]))