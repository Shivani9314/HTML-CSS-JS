
const e=Number(prompt('Enter the value of e'));
const b =Number(prompt ('Enter value of b'));

const ch =Number( prompt('Enter choice for calculation'));


switch(ch) {
    case 1 :
        console.log(e+b);
        break;
    
    case 2 :
        console.log(e-b);
        break;

    case 3 :
        console.log(e*b);
        break;
    
    case 4:
        console.log(e/b);
        break;
    
    default:
        console.log('not found');
        break;
    


}
