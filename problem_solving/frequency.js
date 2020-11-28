// console.log("Hey")
// accepts two arrrays and checks if the string iis same, frequencies must be the same
// The freency should be the same 



// Less optimal solution //
// BIg O complexity of o(n2)
// function same(arr1,arr2){
//     if (arr1.length != arr2.length){
//         return false;
//     }
//     arr1.forEach(elem => {
//         console.log(elem)
//         let correctIndex = arr2.indexOf(elem ** 2)
//         if(correctIndex === -1){
//             return false
//         }
//         console.log(arr2.splice(correctIndex,1))
//         arr2.splice(correctIndex,1);
//     });
//     return true
// }
// console.log(same([4,16,9],[3,2,4]))



//better in terms of the big on complexity O(n)
function same1(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same1([3,2,4],[4,15,9]))