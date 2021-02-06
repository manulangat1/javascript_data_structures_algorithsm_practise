/*

faster - we get a mid point,
then move the start and end 
obly works on sorted arrays...


Time complexity 0(log n)
Best 0(1)
 */


function binarySearch(arr,elem){
    var  start = 0
    var end = arr.length
    var  mid = Math.floor((start + end) /2)
    while(arr[mid] !== elem && start <=  end ){
        if (elem < arr[mid]){
             end = mid -1
        }   else {
            start = mid + 1
        }
       mid = Math.floor((start + end) /2)
    }
    if (arr[mid] === elem){
        return mid   
    }
    return -1
}

console.log(binarySearch([1,4,5,6,7,8,9,10],5))