const ans = document.getElementById('submit');
const output = document.getElementById('output');
let sum = '';
ans.addEventListener('click', (event) => {

    let sub1 = Number.parseInt(document.getElementById('maths').value);
    let sub2 = Number.parseInt(document.getElementById('Science').value);
    sub3 = Number.parseInt(document.getElementById('English').value);
    let sum = (sub1+sub2+sub3)/3;
    console.log(sum);
    output.style.display = "block";
    output.value = sum.toFixed(2);

})
