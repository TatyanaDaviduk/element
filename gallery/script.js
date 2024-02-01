//слайдер в виду стопок
/*function copy(elem, num){

    console.log(elem);
    for(let i = 0; i < num; i++){
        elem.removeAttribute('x-make');
        let cloneElem = elem.cloneNode(true);
        elem.after(cloneElem);
    }
}

function del(elem, num){
    console.log(elem);
    for(let i = 0; i < num; i++){
        elem.nextSibling.remove();
    }
    elem.removeAttribute('x-make');
}


function solution(entryPoint){
    const elems = entryPoint.querySelectorAll('*');
    for( let i = 0; i < elems.length; i++){
        if(elems[i].hasAttribute('x-make')){
            const [attr, num] = elems[i].getAttribute('x-make').split(':');
            switch (attr){
                case "copy" : copy(elems[i],num); break;
                case "remove" : del(elems[i],num); break;
            }
        }

    }


}


solution(document);*/

const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('slider__dot');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const sliderBtnNext = document.querySelector('.slider__btn-next');

let sliderCount = 0;
let sliderWidth;

//адаптивность слайдера
window.addEventListener('resize', showSlide);

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
}