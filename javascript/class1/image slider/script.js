const images =['https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1581687/pexels-photo-1581687.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2706653/pexels-photo-2706653.jpeg?auto=compress&cs=tinysrgb&w=600',];

const totImages = images.length;

const imgBox = document.getElementById('img-box');
const leftBtn = document.getElementById('leftbtn');
const rightBtn = document.getElementById('rightbtn');
const dotContainer = document.getElementById('dots-container');
var alldots = document.getElementById('dots-container').children;

for(let i=0;i<totImages;i++){  
    const newImg = document.createElement('img');  
    newImg.src = images[i];
    imgBox.appendChild(newImg);

    const dot = document.createElement('div');
    dot.classList.add('dots');
    dotContainer.appendChild(dot);
}
  
let curPosition = 0;
alldots[curPosition].classList.add('active'); 

leftBtn.addEventListener('click',()=>{
    showImg(curPosition-1);
})
rightBtn.addEventListener('click',()=>{
    showImg(curPosition+1);
})

for(let i=0;i<totImages;i++){
    alldots[i].addEventListener('click',(clickeddot)=>{        
        showImg(i);
    })
}

function showImg(position){
    position = (position+totImages)%totImages;   
    alldots[curPosition].classList.remove('active');
    alldots[position].classList.add('active');   
    // console.log(alldots[0]); 
    curPosition = position;

    const transformXDistance = -position*600;
    imgBox.style.transform = `translateX(${transformXDistance}px)`

}

