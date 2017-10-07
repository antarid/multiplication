module.exports = function multiply(first, second) {
  
    function convertingInArray(str){
      var arr = [];
      var length = str.length;
      for(var i = 0; i < length ; i++){
        arr[i] = Number(str.charAt(length - 1 - i));
      }
      return arr;
    }

    function sum(str1, str2){
      var arr1 = convertingInArray(str1);
      var arr2 = convertingInArray(str2);
      
      var bigArray = [];
      var smallArray = [];

      if(arr1.length >= arr2.length){
        bigArray = arr1;
        smallArray = arr2;
      }
      
      else{
        bigArray = arr2;
        smallArray = arr1;
      }
      
      for(var i = smallArray.length; i < bigArray.length; i++){
        smallArray.push(0);
      }

      var result = [];
      
      for(var i = 0; i < bigArray.length; i++){
        result[i] = bigArray[i] + smallArray[i];
      }

      for(var i =  0; i < result.length; i++){
        if(result[i] > 9){
          result[i] -= 10;
          if(i == result.length - 1)
            result.push(1);
          else
            result[i+1]++;
        }
    }
    var string = "";
    for(var i = result.length - 1; i >= 0; i--)
      string+=result[i];
    return string;  
  }
    
    var result  = first; 
    
    for(var i = 0; i < Number(second) - 1; i++){
      result = sum(result , first);
    }
    return result;
  }