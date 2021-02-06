/*
search sub strings in a string 
 */


function naiveString(str1,str2){
    var no = 0;
    for (let i=0;i < str1.length;i++){
        for (let j =0;j<str2.length;j++){
            
            if ( str2[j] !== str1[i+j]){
                console.log(i,j)
                break
            }
            if (j === str2.length -1){
                console.log("FOUND")
                no++
            }
            
        }
    }
    return no
 }
console.log(naiveString('He laughed laughed laughed','aughed'))