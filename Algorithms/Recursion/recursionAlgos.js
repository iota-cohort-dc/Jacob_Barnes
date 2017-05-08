//Greatest Common Factor
function rGFC(a,b){
    if(a === b){
        return a;
    }
    else if (a > b){
        return rGFC(a-b, b);
    }
    else{
        return rGFC(a, b-a);
    };
}

//Got Any Grapes
function gHelper(arr, i, sum){
  if(i >= arr.length-1 || i >= arr.length-2){
    return sum;
  }
  else{
    var right = sum;
    var left = sum;
    left = gHelper(arr, i+2, (sum+arr[i+2]))
    if(arr[i+3]){
      right = gHelper(arr, i+3, (sum+arr[i+3]))
    }
    if(left > right){
      sum = left;
    }
    else{
      sum = right;
    }
    return sum;
  }
}

function Grapes(arr){
  var i = 0;
  var sum = arr[i];
  var sum2 = arr[i+1];
  sum = gHelper(arr, i, sum);
  sum2 = gHelper(arr, i+1, sum2);
  if(sum>sum2){
    console.log(sum);
    return sum;
  }
  else{
    console.log(sum2);
    return sum2;
  }
}
// var myArr = [20];
// Grapes(myArr);

//Binary Search Function
function rBS(arr, val){
  var search = Math.floor((arr.length)/2)
  var spl_arr;

  if(arr.length == 1){
    if(val == search){
      console.log('val is in the array');
      return true;
    }
    else {
      console.log('val is not in the array');
      return false;
    }
  }
  if(val < arr[search]){
    spl_arr = arr.splice(0, search);
    console.log(spl_arr);
    return rBS(spl_arr, val);
  }
  else if(val > arr[search]){
    spl_arr = arr.splice(search);
    console.log(spl_arr);
    return rBS(spl_arr, val)
  }
  if(val == arr[search]){
    console.log('val is in the array');
    return true;
  }
}
var myArr = [1,2,3,5,6,7];
// rBS(myArr, 4);
// rBS(myArr, 6);
// rBS(myArr, 9);
