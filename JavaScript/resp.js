burger= document.querySelector('.burger')
navList = document.querySelector('.navList')
right = document.querySelector('.right')





burger.addEventListener('click', ()=>{
        navList.classList.toggle('v-class-resp');
        right.classList.toggle('h-nav-resp');
    })