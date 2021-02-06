/*

Bubble sort - sorting is important...
sort converts to unicode code ponts then sorts..rator 
accepts  comporator fn looks at both pairs
 */

// function inBulit(arr){
    
//      return arr.sort()
//  }

function bubleS(arr){


    /*
      as we loop we check if it is larger we swap then we continue comparing
    */
   for(let j=0;j<arr.length;j++){

   
   for(let i=0; i<arr.length;i++){
       if  (arr[i] > arr[i+1]){
           var temp =arr[i]
           arr[i] = arr[i+1]
           arr[i+1] = temp
       }
   }
   
} 
return arr
}
console.log(bubleS([5,60,2,3,4,10,50,60]))