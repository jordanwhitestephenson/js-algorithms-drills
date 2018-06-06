let uniqueArray = []
var arr1 = [7,7,8,1,14,2,2,-5,6,0];

function findDupsInArray(arr) {
  for(var i = 0; i < arr.length; i ++) {
    if(uniqueArray.indexOf(arr[i])=== -1) {
      uniqueArray.push(arr[i])
    }
  }
  return uniqueArray

}


findDupsInArray(arr1)
