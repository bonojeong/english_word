//nav 클릭에 따라 섹션 변화
function navChange(){
    const nav = document.querySelectorAll('.nav > div');
    const section = document.querySelectorAll('section');
    nav.forEach((element,index) => {
        element.addEventListener('click',function(){
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

//한글 가리기 영어 가리기 
function hideEffect(){
    const krHide = document.querySelector('.korea_btn');
    const enHide = document.querySelector('.english_btn');
    const hide_KR = document.querySelectorAll('.hide_KR');
    const hide_EN = document.querySelectorAll('.hide_EN');
    const hide1 = document.querySelector('.hide1');
    const hide2 = document.querySelector('.hide2');
    krHide.addEventListener('click',function(){
        hide_KR.forEach ( element => {
            element.classList.toggle('hide_KR_On_Off');
        })
        hide1.classList.toggle('hide1_On_Off')
    })
    enHide.addEventListener('click',function(){
        hide_EN.forEach ( element => {
            element.classList.toggle('hide_EN_On_Off');
        })
        hide2.classList.toggle('hide2_On_Off')
    })
}
hideEffect()

//next버튼 누르면 json에서 불러오고
//prev버튼 누르면 이전에있었던 단어 다시 나옴 
//prev가 0일때는 disable속성 true추가 
//next는 무한으로 누를수있음

//버튼누를때 이미지 변경
function btnImgChange(){
    const leftBtn = document.querySelector('.leftBtn');
    const rightBtn = document.querySelector('.rightBtn');
    const gameLeftBtn = document.querySelector('.game_left_Btn');
    const gameRightBtn = document.querySelector('.game_right_Btn');
    const quizLeftBtn = document.querySelector('.quiz_left_Btn');
    const quizRightBtn = document.querySelector('.quiz_right_Btn');
    leftBtn.addEventListener('mousedown',function(){
        leftBtn.src = "img/prevclicktheBtn.png";
    })
    leftBtn.addEventListener('mouseup',function(){
        leftBtn.src = "img/leftbtn.png";
    })
    rightBtn.addEventListener('mousedown',function(){
        rightBtn.src = "img/nextclicktheBtn.png";
    })
    rightBtn.addEventListener('mouseup',function(){
        rightBtn.src = "img/rightbtn.png";
    })
    gameLeftBtn.addEventListener('mousedown',function(){
        gameLeftBtn.src = "img/prevclicktheBtn.png";
    })
    gameLeftBtn.addEventListener('mouseup',function(){
        gameLeftBtn.src = "img/leftbtn.png";
    })
    gameRightBtn.addEventListener('mousedown',function(){
        gameRightBtn.src = "img/nextclicktheBtn.png";
    })
    gameRightBtn.addEventListener('mouseup',function(){
        gameRightBtn.src = "img/rightbtn.png";
    })
    quizLeftBtn.addEventListener('mousedown',function(){
        quizLeftBtn.src = "img/prevclicktheBtn.png";
    })
    quizLeftBtn.addEventListener('mouseup',function(){
        quizLeftBtn.src = "img/leftbtn.png";
    })
    quizRightBtn.addEventListener('mousedown',function(){
        quizRightBtn.src = "img/nextclicktheBtn.png";
    })
    quizRightBtn.addEventListener('mouseup',function(){
        quizRightBtn.src = "img/rightbtn.png";
    })

}
btnImgChange()


//알파벳 종류 누르면 Bg색 color색 변경 
//누른 알파벳으로 시작하는 단어배열 json에서 불러옴 
//한번더 누르면 전체 단어 랜덤
function AtWord(){
    const alphabets = document.querySelectorAll('.alphabet li')
    alphabets.forEach ((element,index) => {
        element.addEventListener('click',alphabetsColorChange)
        element.addEventListener('dblclick',function(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
            })
        })
        //알파벳 색깔 교체
        function alphabetsColorChange(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
                alphabets[index].style.background = "#707070";
                alphabets[index].style.color = "#fff"
            })
        }
    })

}
AtWord()


//즐겨찾기버튼 누르면 보이는 단어가 영단어장의 즐겨찾기 리스트에 추가됨


////////////////////// 핵맨 /////////////////////////

///////////////////// 단어 퀴즈 /////////////////////


///////////////////// 영단어장 //////////////////////

//단어장 선택
function AtWordBook(){
    const wrongWords = document.querySelector('.wrongWords');
    const addWord = document.querySelector('.addWord');
    const wrongWord_words_view = document.querySelector('.wrongWord_words_view');
    const addWord_words_view = document.querySelector('.addWord_words_view');
    wrongWords.addEventListener('click',function(){
        wrongWords.style.background = '#707070';
        wrongWords.style.color = '#fff';
        addWord.style.background = '#fff';
        addWord.style.color = '#707070';
        wrongWord_words_view.style.display = 'unset';
        addWord_words_view.style.display = 'none';
    })
    addWord.addEventListener('click',function(){
        wrongWords.style.background = '#fff';
        wrongWords.style.color = '#707070';
        addWord.style.background = '#707070';
        addWord.style.color = '#fff';
        wrongWord_words_view.style.display = 'none';
        addWord_words_view.style.display = 'unset';
    })
    // 선택한 단어장에서 문제풀기 ! 
    const tryQuiz = document.querySelector('.TryQuiz');
    const wordBookQuiz = document.querySelector('.wordBookQuiz');
    const kind_of_wordBook = document.querySelector('.kind_of_wordBook');
    const header = document.querySelector('header');
    //문제풀기 눌렀을 때 ! 
    function TryQuiz(){
        tryQuiz.addEventListener('mousedown',function(){
            tryQuiz.style.background = '#707070';
            tryQuiz.style.color = '#fff';
            wrongWord_words_view.style.display = 'none';
            addWord_words_view.style.display = 'none';
            kind_of_wordBook.style.display = 'none';
            header.style.display = 'none';
        })
        tryQuiz.addEventListener('mouseup',function(){
            tryQuiz.style.background = '#fff';
            tryQuiz.style.color = '#707070';
            tryQuiz.style.display = 'none';
            wordBookQuiz.style.display = 'flex';
        })
    }
    TryQuiz()
    
    //문제풀기 닫기 버튼을 눌렀을 때!
    const wordBookQuiz_closeBtn = document.querySelector('.wordBookQuiz_closeBtn');
    function closeWBQuiz(){
        wordBookQuiz_closeBtn.addEventListener('click',function(){
            wordBookQuiz.style.display = 'none';
            header.style.display = 'unset';
            kind_of_wordBook.style.display = 'flex';
            wrongWord_words_view.style.display = 'unset';
            tryQuiz.style.display = 'unset';
        })
    }
    closeWBQuiz()

    const wB_prev_Img= document.querySelector('.wB_prev_Img')
    const wB_next_Img= document.querySelector('.wB_next_Img')
    //영단어장 퀴즈에서 방향이미지 클릭시 교체
    function wB_DirectionImgChange(){
        wB_prev_Img.addEventListener('mousedown',function(){
            wB_prev_Img.src = "img/prevclicktheBtn.png";
        })
        wB_prev_Img.addEventListener('mouseup',function(){
            wB_prev_Img.src = "img/leftbtn.png";
        })
        wB_next_Img.addEventListener('mousedown',function(){
            wB_next_Img.src = "img/nextclicktheBtn.png";
        })
        wB_next_Img.addEventListener('mouseup',function(){
            wB_next_Img.src = "img/rightbtn.png";
        })
    }
    wB_DirectionImgChange()
}
AtWordBook()
