//json 파일 가져오기
let wordDate = JSON.parse(JSON.stringify(words));
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
    //quiz들어갔을 때 start버튼 재생성
    var start_btn = document.querySelector('.start_btn');
    nav[2].addEventListener('click',function(){
        start_btn.style.display = 'unset';
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
    const gameLeftBtn = document.querySelector('.game_left_Btn');
    const gameRightBtn = document.querySelector('.game_right_Btn');
    const quizLeftBtn = document.querySelector('.quiz_left_Btn');
    const quizRightBtn = document.querySelector('.quiz_right_Btn');
    
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
    //알파벳 번호를 currentAlphabet로 지정
    let currentAlphabet = 0
    const alphabets = document.querySelectorAll('.alphabet li')
    alphabets.forEach ((element,index) => {
        element.addEventListener('click',alphabetsColorChange)
        element.addEventListener('click',alphabetsCheck)
        element.addEventListener('dblclick',function(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
            })
        })
        //알파벳 번호 currentAlphabet 변경
        function alphabetsCheck(){
            currentAlphabet = index;
            console.log(currentAlphabet);
        }
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
    //각각의 알파벳에 json데이터 담기
    let a_word = wordDate.a_word
    let b_word = wordDate.b_word
    let c_word = wordDate.c_word
    let d_word = wordDate.d_word
    let e_word = wordDate.e_word
    let f_word = wordDate.f_word
    let g_word = wordDate.g_word
    let h_word = wordDate.h_word
    let i_word = wordDate.i_word
    let j_word = wordDate.j_word
    let k_word = wordDate.k_word
    let l_word = wordDate.l_word
    let m_word = wordDate.m_word
    let n_word = wordDate.n_word
    let o_word = wordDate.o_word
    let p_word = wordDate.p_word
    let q_word = wordDate.q_word
    let r_word = wordDate.r_word
    let s_word = wordDate.s_word
    let t_word = wordDate.t_word
    let u_word = wordDate.u_word
    let v_word = wordDate.v_word
    let w_word = wordDate.w_word
    let x_word = wordDate.x_word
    let y_word = wordDate.y_word
    let z_word = wordDate.z_word
    let wordsArr = [
        a_word,b_word,c_word,d_word,e_word,f_word,g_word,h_word,
        i_word,j_word,k_word,l_word,m_word,n_word,o_word,p_word,q_word,r_word,
        s_word,t_word,u_word,v_word,w_word,x_word,y_word,z_word
    ]
    console.log(wordsArr.length)
    console.log(alphabets[0])
    //a눌렀을때 a_word배열 가져오기

    console.log(wordsArr[currentAlphabet])
    console.log([currentAlphabet])

    //next prev 이미지 변경
    const leftBtn = document.querySelector('.leftBtn');
    const rightBtn = document.querySelector('.rightBtn');
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
    
    //next 버튼에 currentAlphabet번호 인식해서 단어 배열넣기
    rightBtn.addEventListener('click',function(){
        console.log(wordsArr[currentAlphabet])
    })
    //더블클릭할땐 currentAlphabet 27로 설정
    const dubbleClick = document.querySelector('.alphabet')
    dubbleClick.addEventListener('dblclick',function(){
        currentAlphabet = 27
        console.log(currentAlphabet)
    })
}
AtWord()

//즐겨찾기버튼 누르면 보이는 단어가 영단어장의 즐겨찾기 리스트에 추가됨


////////////////////// 핵맨 /////////////////////////

///////////////////// 단어 퀴즈 /////////////////////
function AtQuiz(){
    //스타트버튼 누르기 ! 
    var start_btn = document.querySelector('.start_btn');
    const start_game = document.querySelector('.start_game');
    start_game.addEventListener('click',function(){
        start_btn.style.display = 'none'
    })
    // //스타트 버튼 누르면 시간 초 작동
    // const leftTime = document.querySelector('.leftTime');
    // let count = 10
    // let time = 10
    // // 타이머 함수 1초씩 호출하는 함수 만들기
	// 	time = setInterval("myTimer()",1000);
    // function myTimer() {
	// 	count = count - 1; // 타이머 선택 숫자에서 -1씩 감산함(갱신되기 때문)
	// 	if(count == 0) { 
	// 		clearInterval(time);	// 시간 초기화
	// 		alert("시간이 완료되었습니다.")
	// 	}
	// }


}
AtQuiz()

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


//배열 랜덤 섞기
// let abcd = [1,2,3,4,5,6,7,8,9,10];

// function shuffle(a){
//     var j; // 랜덤 함수 넣을 변수
//     var x; // 스왑 빈값 변수
//     var i; // 변수
//     for (i = a.length; i; i--){
//         //j는 0~9까지의 랜덤값!
//         j = Math.floor(Math.random() * i);
//         //x는 a[9];
//         x = a[ i -1 ];
//         a[ i - 1 ] = a[ j ];
//         a[ j ] = x;
//     }
//     console.log(a)
// }
// shuffle(abcd);