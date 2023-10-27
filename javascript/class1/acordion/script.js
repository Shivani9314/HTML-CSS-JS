const qusAns = document.querySelectorAll('.qus-ans');

for(let i=0; i<qusAns.length; i++) {
        qusAns[i].addEventListener('click', function() {
        qusAns[i].classList.toggle('active');
    })
}