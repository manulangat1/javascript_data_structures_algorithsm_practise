
//naive  solution
// time complexity of o(n2)
// space complexity of o(1)


/*
function sumZero(arr){
    console.log(arr)
    for (let i =0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[1] + arr[j] === 0){
                return true
            }
        }
    }
}
*/

function sumZero(arr){
    console.log(arr)
    let soln = []
    let left = 0;
    let right = arr.length -1
    while (left < right){
        let sum = arr[left] + arr[right]
        if (sum === 0){
            // return [arr[left],arr[right]]
            soln.push([arr[left],arr[right]])
        } else if (sum > 0){
            right--
        } else {
            left++
        }
    }
    console.log(soln)
}
console.log(sumZero([-3,-2,-1,0,2,3,1]))