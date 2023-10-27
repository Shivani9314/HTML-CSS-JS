const str = ['Ram' , 'Shyam' , 'Rohit', 'Jay' , 'Raj', 'Ronak' , ' Deepu', 'Shruti' , 'Megha', 'om', 'pop'];

function lessthan_2alpha(str){

    if(str.length < 3){
        return true;
    }

    else{
        return false;
    }

}

let str_with2 = str.filter(lessthan_2alpha);
console.log(str_with2);

function contains_hi(str){

    return str.includes('hi');

}

let hi= str.filter(contains_hi);
console.log(hi);

function palindrome(str){

    let n= str.length;

    for(let i=0;i<n/2;i++){

        if(str[i]!= str[n-i-1]){
            return false;
        }
    }
    return true;

}

//2

let name_palin = str.filter(palindrome);
console.log(name_palin);

let numbers = [25, 36,49,64,225];

function squareroot (numbers){
    return Math.sqrt(numbers);
}

const sqrt_value = numbers.map(squareroot);
console.log(sqrt_value);

function return_string(numbers){
    return numbers.toString();
}

const strings = numbers.map(return_string);
console.log(strings);


//3

let users = [
    {firstName : 'Susan' , lastName : 'Steward'},
    {firstName : 'Daniel' , lastName : 'Logbottom'},
    {firstName : 'Jacob' , lastName : 'Black'},
];

function firstName_find(ele) {
    return ele.firstName === 'Susan';
}

const name_find1 = users.filter(firstName_find);
console.log(name_find1);

function lastName_find(ele) {
    return ele.lastName.includes('L');
}

const name_findl = users.filter(lastName_find);
console.log(name_findl);

function return_full_name(ele){
    return ele.firstName + ' ' + ele.lastName;
}

const full_name = users.map(return_full_name);
console.log(full_name);