/*

js has diff searching algo,
indexOf - has 
includes 
find 
findindex 


LST pseudo 
- loop through check if is  equal return index else  -1 
Best case 0(1)
Avarage and Worst 0(n)
*/

function lst (arr,elem){
    for (let i = 0; i< arr.length;i++){
        if (arr[i] === elem){
            return i
        }
        
    }   
    return -1
}
console.log(lst([2,3,4,5,6,7,10,99,40],40))