

(function () {
    const tab = function(){
        const tabNav = document.querySelectorAll('.tabs-nav__item');
        console.log(tabNav);
        const tabContent = document.querySelectorAll('.tab');
        console.log('1');
        tabNav.forEach(each => {
            each.addEventListener('click', function(){
                console.log('1');
            })
        })
    
    }
}())







