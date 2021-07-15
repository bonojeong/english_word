//nav 클릭에 따라 섹션 변화
function navChange(){
    const nav = document.querySelectorAll('.nav > div');
    const section = document.querySelectorAll('section');
    nav.forEach((element,index) => {
        element.addEventListener('click',function(){
            let navArrnum
            navArrnum = index
            nav.forEach ( i => {
                i.style.background = '#fff'
                i.style.color = '#848484'
                nav[index].style.background = '#6a6a6a'
                nav[index].style.color = '#ececec'
            })
            section.forEach( i => {
                i.style.display = 'none'
                section[index].style.display = 'flex'
            })
        })
    })
}
navChange()

function hideEffect(){
    const krHide = document.querySelector('.korea_btn');
    const enHide = document.querySelector('.english_btn');
    const hide_KR = document.querySelectorAll('.hide_KR');
    const hide1 = document.querySelector('.hide1');
    const hide2 = document.querySelector('.hide2');
    krHide.addEventListener('click',function(){
        hide_KR.forEach ( element => {
            element.classList.toggle('hide_KR_On_Off');
        })
        hide1.classList.toggle('hide1_On_Off')
    })
}
hideEffect()
