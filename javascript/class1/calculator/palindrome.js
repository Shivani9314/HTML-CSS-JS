function palindrome(name){

    let n= name.length;

    for(let i=0;i<n/2;i++){

        if(name[i]!= name[n-i-1]){
            return false;
        }
    }
    return true;
}

const name = prompt("Enter word");

const value = palindrome(name);

console.log(value);