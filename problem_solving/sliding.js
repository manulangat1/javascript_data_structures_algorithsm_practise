
// quadratic Big Oh notation O(n2)
// space complexity of 

// function maxSubarraySum(arr,num){
//     if(arr.length < num){
//         return false
//     }
//     let max = -Infinity;
//     let tempSum = 0;

//     for(let i=0;i<arr.length - num+1;i++){
//         temp = 0
//         for(let j=0;j<num;j++){
//             temp += arr[i+j]
//         }
//         if(temp > max){
//             max=temp
//         }
//         console.log(temp,max)
//     }
//     return max
    
// }

function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0;i<num;i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i=num;i<arr.length;i++){
        tempSum = tempSum -arr[i-num] + arr[i]
        console.log(tempSum)
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([1,4,3,0,-5,0],2))