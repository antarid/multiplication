module.exports = function multiply(first, second) {
  
    function remeberTheOne(string, index){
      var result;
      if(index == -1){  // or 0 
        return '1' + string;
      }

      while(true){
        var number = string.charAt(index);
        if(++number < 9){
          result = string.substring(0 , index) + number + string.substring(index+1);
          return result;
        }
        else{
          result = string.substring(0 , index) + '0' + string.substring(index + 1);
          remeberTheOne(result, index - 1);
        }
      }
    }
    
    function sum(str1, str2){
      var bigString = "";
      var smallString = "";
      var result = "";
      
      if(str1.length >= str2.length){
        bigString = str1;
        smallString = str2;
      }
      else{
        bigString = str2;
        smallString = str1;
      }
      
      for(var i = 0; i < smallString.length; i++){
        var sum = Number(bigString.charAt(bigString.length - i - 1)) + Number(smallString.charAt(smallString.length - i - 1));

        if(sum > 9){
          sum-= 10;
              if(i == 0){
                  result = bigString.substring(0, bigString.length - i - 1) + sum;
              }
              else{
                  result = bigString.substring(0, bigString.length - i - 1) + sum + bigString.substring(bigString.length - i);
                  result = remeberTheOne(result , bigString.length - i - 1);
              }
        }

        else  {

          if(i == 0){
              result = bigString.substring(0, bigString.length - i - 1) + sum;
          }
          else
              result = bigString.substring(0, bigString.length - i - 1) + sum + bigString.substring(bigString.length - i);

        }
      }
      return result;
    }
  
    var result = first; 
    for(var i = 0; i < Number(second); i++){
      result = sum(result , first);
    }
    return result;
  } 

  function remeberTheOne(string, index){
      var result;
      if(index == -1){  // or 0 
        return '1' + string;
      }

      while(true){
        var number = string.charAt(index);
        if(++number < 9){
          result = string.substring(0 , index) + number + string.substring(index+1);
          return result;
        }
        else{
          result = string.substring(0 , index) + '0' + string.substring(index + 1);
          remeberTheOne(result, index - 1);
        }
      }
    }
    
    function sum(str1, str2){
      var bigString = "";
      var smallString = "";
      var result = "";
      
      if(str1.length >= str2.length){
        bigString = str1;
        smallString = str2;
      }
      else{
        bigString = str2;
        smallString = str1;
      }
      
      for(var i = 0; i < smallString.length; i++){
        var sum = Number(bigString.charAt(bigString.length - i - 1)) + Number(smallString.charAt(smallString.length - i - 1));

        if(sum > 9){
          sum-= 10;
              if(i == 0){
                  result = bigString.substring(0, bigString.length - 1) + sum;

              }
              else{
                  result = bigString.substring(0, bigString.length - i - 1) + sum + bigString.substring(bigString.length - i);
                  
              
              }
              result = remeberTheOne(result , bigString.length - i - 2);
              
        }

        else  {

          if(i == 0){
              result = bigString.substring(0, bigString.length - i - 1) + sum;
          }
          else
              result = bigString.substring(0, bigString.length - i - 1) + sum + bigString.substring(bigString.length - i);

        }
      }
      return result;
    }
