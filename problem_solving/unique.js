console.log("Hey")


function countUniqueValues(arr){
    if (arr.length < 1){
        return 0;
    }
    let counter = { }
    for (let val of arr){
        counter[val] = (counter[val] || 0)+1;
    }
    console.log(counter)
    for (let val of Object.values(counter)){

        if (val > 1){
            console.log(Object.keys(counter))
        }
    }
}


console.log(countUniqueValues([1,2,3,4,4]))