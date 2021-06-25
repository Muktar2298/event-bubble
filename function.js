let numbers = [5,10,15,20,25,30];
let friendAges = [11,12,13,14,15,16];

function doubleIt(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element*2);
        if(element % 2 != 0){
            console.log(element * 2 ,": is odd element");
        }
        else{
            console.log(element,": is even element");
        }
        
    }
}
doubleIt(numbers);
doubleIt(friendAges);