// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 var temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(selectionSort([32,4,35,67,78,88]))

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var minindex = i
        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[minindex]>arr[j]) {
                minindex = j
            }
        }
        if (minindex != i) {
            [arr[i], arr[minindex]] = [arr[minindex], arr[i]]
            // var temp=arr[minindex];
            // arr[minindex]=arr[i]
            // arr[i]=temp
        }


    }
    return arr
}
console.log(selectionSort([32, 4, 35, 67, 78, 88]))
