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
    //현재 단어 순번
    let currentWord 
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
    let changeImg = document.querySelector('.wordImg')
    let change_word_En = document.querySelector('.changeWord')
    let change_word_Pron = document.querySelector('.changePron')
    let change_word_Kr1 = document.querySelector('.change1Kr')
    let change_word_Kr1Sen = document.querySelector('.change1Sen')
    let change_word_Kr1SenKr = document.querySelector('.change1SenKr')
    let change_word_Kr2 = document.querySelector('.change2Kr')
    let change_word_Kr2Sen = document.querySelector('.change2Sen')
    let change_word_Kr2SenKr = document.querySelector('.change2SenKr')
    let change_word_Kr3 = document.querySelector('.change3Kr')
    let change_word_Kr3Sen = document.querySelector('.change3Sen')
    let change_word_Kr3SenKr = document.querySelector('.change3SenKr')
    //next 버튼에 currentAlphabet번호 인식해서 단어 배열넣기
    function wordTextChange(){
        var currentAlphabetArr = wordsArr[currentAlphabet]
        changeImg.innerHTML = currentAlphabetArr[currentWord].wordImg;
        change_word_En.innerHTML = currentAlphabetArr[currentWord].word_En;
        change_word_Pron.innerHTML = currentAlphabetArr[currentWord].word_En_pron;
        change_word_Kr1.innerHTML = currentAlphabetArr[currentWord].meaning_Kr1;
        change_word_Kr1Sen.innerHTML = currentAlphabetArr[currentWord].meaning_Kr1_sen;
        change_word_Kr1SenKr.innerHTML = currentAlphabetArr[currentWord].meaning_Kr1_senMeaning;
        change_word_Kr2.innerHTML = currentAlphabetArr[currentWord].meaning_Kr2;
        change_word_Kr2Sen.innerHTML = currentAlphabetArr[currentWord].meaning_Kr2_sen;
        change_word_Kr2SenKr.innerHTML = currentAlphabetArr[currentWord].meaning_Kr2_senMeaning;
        change_word_Kr3.innerHTML = currentAlphabetArr[currentWord].meaning_Kr3;
        change_word_Kr3Sen.innerHTML = currentAlphabetArr[currentWord].meaning_Kr3_sen;
        change_word_Kr3SenKr.innerHTML = currentAlphabetArr[currentWord].meaning_Kr3_senMeaning;
    }
    //알파벳 번호를 currentAlphabet로 지정
    let currentAlphabet = 0
    const alphabets = document.querySelectorAll('.alphabet li')
    alphabets.forEach ((element,index) => {
        element.addEventListener('click',alphabetsColorChange)
        element.addEventListener('click',alphabetsCheckAndShuffle)
        element.addEventListener('click',wordTextChange)
        element.addEventListener('dblclick',function(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
            })
        })
        function alphabetsCheckAndShuffle(){
            //알파벳 누를때마다 currentWord 순번 0으로 초기화
            currentWord = 0
            //알파벳 번호 currentAlphabet 변경
            currentAlphabet = index;
            //currentAlphabet의 값에 따라 단어 배열 가져오고
            var currentAlphabetArr = wordsArr[currentAlphabet]
            // 가져온 배열을 랜덤 셔플 !
            function shuffle(array) {
                var m = array.length,
                    t,
                    i
                while (m) {
                    i = Math.floor(Math.random() * m--)
                    t = array[m]
                    array[m] = array[i]
                    array[i] = t
                }
                return array
            }
            console.log(shuffle(currentAlphabetArr))
        }
        //알파벳 색깔 교체
        function alphabetsColorChange(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
                alphabets[index].style.background = "#707070";
                alphabets[index].style.color = "#fff"
                leftBtn.style.opacity = '0.8'
            })
        }
    })
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
    //더블클릭할땐 currentAlphabet 27로 설정
    const dubbleClick = document.querySelector('.alphabet')
    dubbleClick.addEventListener('dblclick',function(){
        currentAlphabet = 27
        console.log(currentAlphabet)
    })
    const showWord = function(){
        function nextAlphabetChange(){
            var currentAlphabetArr = wordsArr[currentAlphabet]
            if( currentWord < currentAlphabetArr.length - 1){
                leftBtn.removeAttribute('disable')
                currentWord = currentWord + 1;
                rightBtn.style.opacity = '1';
                leftBtn.style.opacity = '1';
                wordTextChange()
            }
            if(currentWord == currentAlphabetArr.length - 1){
                rightBtn.setAttribute('disable','true')
                rightBtn.style.opacity = '0.3'
            }
            console.log(currentWord)
        }
        function prevAlphabetChange(){
            var currentAlphabetArr = wordsArr[currentAlphabet]
            if(currentWord > 0 ){
                rightBtn.removeAttribute('disable')
                currentWord = currentWord -1;
                leftBtn.style.opacity = '1';
                rightBtn.style.opacity = '1';
                wordTextChange()
            }
            if(currentWord == 0 ){
                leftBtn.setAttribute('disabled','true')
                leftBtn.style.opacity = '0.3'
            }
            console.log(currentWord)
        }
        function init(){
            leftBtn.setAttribute('disabled','true')
            leftBtn.addEventListener('click',prevAlphabetChange)
            rightBtn.addEventListener('click',nextAlphabetChange)
            leftBtn.style.opacity = '0.2'
            currentWord = 0
        }
        init()
    }
    showWord()

    //즐겨찾기버튼 누르면 보이는 단어가 영단어장의 즐겨찾기 리스트에 추가됨
    const add = document.querySelector('.add');
    //즐겨찾기 눌렀을때 모션
    add.addEventListener('click',function(){
        setTimeout(function(){
            setTimeout(goingUp,0)
            setTimeout(backToInit,500)
        },0)
        function goingUp(){
            change_word_En.style.transition = '0.5s'
            change_word_En.style.transform = `translateY(-20%)` 
            change_word_En.style.opacity = '0'
        }
        function backToInit(){
            change_word_En.style.transition = '0s'
            change_word_En.style.transform = `translateY(0%)` 
            change_word_En.style.opacity = '1'
        }
    })
    //addWord_words li에 있는 단어들을 배열로 만들어야해 그러면 ...
    //Set객체로 중복되는 배열 생성 X 
    const addWord_wordsList = document.querySelector('.addWord_words');
    let addWordArr = new Set();

    add.addEventListener('click',addWord)
    //addWordArr안에 li 생성 
    //그 안에 p 생성  
    //p 안에 화면에 보이는 단어 텍스트 추가!
    function addWord(){
        //배열에 추가 Set는 add를 사용해서 추가 push아님
        //배열이랑 해당하는 단어랑 비교에서 배열안에 있으면 단어추가 안됨!
        //배열에 includes로 배열을 검색해서 중복되는지 확인 !
        if([...addWordArr].includes(change_word_En.innerHTML) == false){
            //중복이 안되면 li추가 !!
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.append(change_word_En.innerHTML);
            addWord_wordsList.append(li);
            li.append(p)
        }
        //배열에 단어추가하기 !
        addWordArr.add(change_word_En.innerHTML)
        //Set 배열 확인하는법 [ ...배열이름 ] 
        // console.log([...addWordArr])
    }
}
AtWord()



////////////////////// 핵맨 /////////////////////////





///////////////////// 단어 퀴즈 /////////////////////
function AtQuiz(){
    //스타트버튼 누르기 ! 
    var start_btn = document.querySelector('.start_btn');
    const start_game = document.querySelector('.start_game');
    start_game.addEventListener('click',function(){
        start_btn.style.display = 'none'
    })

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