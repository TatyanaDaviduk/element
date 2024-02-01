const btnDialog = document.querySelector('.btn--dialog');
const dialog = document.getElementById('myDialog');
btnDialog.addEventListener('click', () =>{
    dialog.show();
});
const btnClose = document.querySelector('.btn--close');
btnClose.addEventListener('click', () =>{
    dialog.close();
});


const btnModal = document.querySelector('.btn--modal');
const modal = document.getElementById('myModal');
btnModal.addEventListener('click', () =>{
    modal.showModal();
    document.body.classList.add("scroll-lock");
});
modal.addEventListener('click', ({currentTarget,target}) =>{
    const dialogElement = currentTarget; //элемент на который повешен обработчик
    const isClickedOnBackDrop = target ; //инициатор клика
    if (isClickedOnBackDrop ==dialogElement) {
        dialogElement.close();
      }
})
const btnCloseModal = document.querySelector('.modal__btn--close');
btnCloseModal.addEventListener('click', () =>{
    modal.close();
    document.body.classList.remove("scroll-lock");
});





