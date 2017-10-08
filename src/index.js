module.exports = function multiply(first, second) {
  
    function convertingInArray(str){
      var arr = [];
      var length = str.length;
      for(var i = 0; i < length ; i++){
        arr[i] = Number(str.charAt(length - 1 - i));
      }
      return arr;
    }

    function sum(first, second){
        
      if(first.length >= second.length){
        bigArray = first;
        smallArray = second;
      }
      else{
        bigArray = second;
        smallArray = first;
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
    return result;
  }
    var big;
    var small;
    var result = [0];
    if(first.length >= second.length){
      big = convertingInArray(first);
      small = convertingInArray(second);
    }
    else{
      big = convertingInArray(second);
      small = convertingInArray(first);
    }
    for(var i = 0; i < small.length; i++){
      var temp = [0];
        for(var j = 0; j < small[i]; j++){
          temp = sum(temp , big);
        }
        for(var j = 0; j < i; j++){
          temp.unshift(0);
        } 
      result = sum(result , temp);
    }

    var string = "";
    for(var i  = 0; i < result.length; i++)
      string += result[result.length - i - 1];
    if(string.charAt(0) == '0')
      string = string.substring(1);
    return string;
  }
