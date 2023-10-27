const n1 = Number(prompt('Enter marks od subject 1'));
const n2 = Number(prompt('Enter marks od subject 2'));
const n3 = Number(prompt('Enter marks od subject 3'));
const n4 = Number(prompt('Enter marks od subject 4'));
const n5 = Number(prompt('Enter marks od subject 5'));

const avg = (n1+n2+n3+n4+n5)/5;

console.log(avg);

switch(true){
    case avg>=90 :
        console.log('A');
        break;
     
    case avg>=75 :
        console.log('B');
        break;
    
    case avg>=60 :
        console.log('C');
        break;

    case avg>=45 :
        console.log('D');
        break;

    default :
        console.log('Fail');
        break;
}
