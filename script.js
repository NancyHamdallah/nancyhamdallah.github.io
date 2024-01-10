
function MyFunction(nums) {
   
    var isZero = 0;
    var arrayLength = nums.length;
    var sumOfNumbers = (arrayLength*((arrayLength/2)+0.5));
    
    var resultNum = 0 ; 
    for(var i=0;i<arrayLength;i++){
        resultNum += nums[i];
        
    }
   
     return(sumOfNumbers-resultNum);
}

