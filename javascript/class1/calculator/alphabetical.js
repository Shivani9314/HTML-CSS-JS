function string(name){
    return name.split('').sort().join('');
}

const name = prompt("Enter a word");

console.log(string(name));