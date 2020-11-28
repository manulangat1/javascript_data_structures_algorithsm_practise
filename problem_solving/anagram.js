// Big O complexity of O(n)

function validAnagram(str1,str2){
    if (str1.length!= str2.length){
        return false
    }
    let counter1 = {}
    for( let val of str1){
        counter1[val] = (counter1[val] || 0)+1;
    }
    for( let val of str2){
        if(val in counter1){
            counter1[val] -= 1;
        } else {
            return false
        }
    }
    
    return true
    
    
}
console.log(validAnagram('MANU','ANUM'))