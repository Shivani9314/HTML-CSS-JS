function array(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
         sum += arr[i];
    }
    let avg= sum/arr.length;

    return avg;

}

let value = Number(prompt("Enter the value of array"));
let input = document.getElementsByName('array[]')

console.log(array(input));