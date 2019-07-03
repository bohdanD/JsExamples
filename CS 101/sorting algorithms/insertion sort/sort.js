
function insertSort(A) {
    for (var j = 1; j < A.length; j++) {
        var key = A[j];
        var i = j - 1; // element index from the left
        while(i != -1 && A[i] > key){
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }

    return A;
}


var array = [3, 7, 6, 4, 19, 10];
console.log(array);

console.log(insertSort(array));