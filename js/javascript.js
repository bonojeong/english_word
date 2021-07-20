//json 파일 가져오기
let wordDate = JSON.parse(JSON.stringify(words));

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

//버튼누를때 이미지 변경
function btnImgChange(){
    
    const quizLeftBtn = document.querySelector('.quiz_left_Btn');
    const quizRightBtn = document.querySelector('.quiz_right_Btn');
    quizLeftBtn.addEventListener('mousedown',leftMouseDownImgChange)
    quizLeftBtn.addEventListener('mouseup',leftMouseUpImgChange)
    quizRightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    quizRightBtn.addEventListener('mouseup',rightMouseUpImgChange)
}

// 버튼 클릭시 이미지 변경
function leftMouseDownImgChange(){
    this.src = "img/prevclicktheBtn.png";
}
function leftMouseUpImgChange(){
    this.src = "img/leftbtn.png";
}
function rightMouseDownImgChange(){
    this.src = "img/nextclicktheBtn.png";
}
function rightMouseUpImgChange(){
    this.src = "img/rightbtn.png";
}

//한번더 누르면 전체 단어 랜덤
function AtWord(){
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
    const leftBtn = document.querySelector('.leftBtn');
    const rightBtn = document.querySelector('.rightBtn');
    const alphabets = document.querySelectorAll('.alphabet li')

    //바뀔 텍스트들 JSON이랑 비교해서 선언!
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
    //알파벳 기능 
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
        //셔플
        function alphabetsCheckAndShuffle(){
            //알파벳 누를때마다 currentWord 순번 0으로 초기화
            currentWord = 0
            //알파벳 번호 currentAlphabet 변경
            currentAlphabet = index;
            //currentAlphabet의 값에 따라 단어 배열 가져오고
            var currentAlphabetArr = wordsArr[currentAlphabet]
            shuffle(currentAlphabetArr)
        }
        //알파벳 색깔 교체
        function alphabetsColorChange(){
            alphabets.forEach ( i => {
                i.style.background = "none";
                i.style.color = "#6a6a6a";
                alphabets[index].style.background = "#707070";
                alphabets[index].style.color = "#fff"
                leftBtn.style.opacity = '0.3'
            })
        }
    })
    //버튼클릭시 이미지 변경
    leftBtn.addEventListener('mousedown',leftMouseDownImgChange)
    leftBtn.addEventListener('mouseup',leftMouseUpImgChange)
    rightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    rightBtn.addEventListener('mouseup',rightMouseUpImgChange)
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
        //Set을 배열로 만드는법 [ ...배열이름 ]
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
    }
}
AtWord()


////////////////////// 핵맨 /////////////////////////
function Atgame1(){
    const gameRightBtn = document.querySelector('.game_right_Btn');
    gameRightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    gameRightBtn.addEventListener('mouseup',rightMouseUpImgChange)
    const input = document.querySelector('.inputValue');
    const game_HowManyWords = document.querySelector('.game_HowManyWords')
    const game_word_text = document.querySelectorAll('.game_HowManyWords li p')
    const game_word_alphabet = document.querySelectorAll('.game_word_alphabet')
    let game_meaning_kr1 = document.querySelector('.game_meaning_kr1');
    let game_meaning_kr2 = document.querySelector('.game_meaning_kr2');
    let game_meaning_kr3 = document.querySelector('.game_meaning_kr3');
    let leftLife = document.querySelector('.leftLife');
    let lifeImg = document.querySelector('.lifeImg');
    // 라이프 갯수!!
    let life = 7
    let gamePoint = 0
    
    
    // 보여진 단어들 배열에 넣기
    let result
    let gameWord = []
    gameRightBtn.addEventListener('click',function(){
        lnit(game_word_alphabet)
        randomWord()
    })
    input.addEventListener('focusin',function(){
        input.placeholder = "";
    })
    input.addEventListener('focusout',function(){
        input.placeholder = "GoGo!";
    })
    input.addEventListener('change',printValue)
    //방향눌렀을때 기존에있던 단어(li) 지우기 
    function lnit(){
        game_word_alphabet.forEach( i => {
            i.remove()
        })
        input.style.display = 'block';
        leftLife.innerHTML = '7'
        life = 7
        input.maxlength = '1'
        gamePoint = 0 
        lifeImg.src  = 'img/life.png'
    }

    //랜덤단어불러오기
    function randomWord(){
        //알파벳 종류를 먼저 선별
        randomArr = Math.floor(Math.random() * wordsArr.length)
        let gameRandomWords = wordsArr[randomArr]
        // 고른 알파벳에서 랜덤으로 선별 !
        let randomArr2 = Math.floor(Math.random() * gameRandomWords.length)

        //가져온 단어 변수에 담기
        let randomWord = gameRandomWords[randomArr2].word_En;
        let randomWordKr1 = gameRandomWords[randomArr2].meaning_Kr1;
        let randomWordKr2 = gameRandomWords[randomArr2].meaning_Kr2;
        let randomWordKr3 = gameRandomWords[randomArr2].meaning_Kr3;
        
        //한글뜻 넣기 
        game_meaning_kr1.innerHTML = randomWordKr1;
        game_meaning_kr2.innerHTML = randomWordKr2;
        game_meaning_kr3.innerHTML = randomWordKr3;
        
        //가져온 단어를 하나씩 나누기
        let splitAlphabet = /[a-z]/gi;
        result = randomWord.match(splitAlphabet);

        // 단어 하나하나를 알파벳으로 나눠서 li 추가 & 클래스 추가 !!
        let litext ='';
        result.forEach( i => {
            litext = litext+`<li class='game_word_alphabet'>
                                <p>${i}</p>
                             </li>`
        })

        //가져온 단어 배열에 넣기 !
        game_HowManyWords.innerHTML = litext;
        gameWord.push(randomWord)
        console.log(randomWord)
    }

    //input에 value값 받아오기
    function printValue()  {
        let inputValue = input.value;
        const game_word_text = document.querySelectorAll('.game_HowManyWords li p')
        //input에 입력창다시 비우기 
        input.value = ""
        console.log(result)
        console.log(inputValue)
        console.log(life)

        //포함되는 값이 있으면 opacity 1로 변경 
        //포함되는 값이 있으면 배열에서 삭제 (같은값을 입력했을 때 방지)
        game_word_text.forEach( i => {
            if( i.innerHTML.includes(inputValue) == true ){
                i.style.opacity = '1'
                //단어점수 1 점획득 --> 알파벳갯수 만큼 점수를 얻으면 승리! 
                gamePoint = gamePoint + 1
                return gamePoint;
            }
        })
        //틀리면 life하나 깎임
        if( result.includes(inputValue) == false ){
            life = life - 1;
            leftLife.innerHTML = life;
            if(life == 0 ){
                input.style.display = 'none'
                lifeImg.src = 'img/gameLose.png'
            }
            else{
                input.style.display = 'block'
            }
        }
        //획득한 점수와 단어의 길이가 같으면 input Off
        if(gamePoint == result.length ){
            input.style.display = 'none'
            lifeImg.src = 'img/gameWin.png'
        }
        console.log(gamePoint);
        console.log(result.length)
    }
}
Atgame1()


///////////////////// 단어 퀴즈 /////////////////////
function AtQuiz(){
    //스타트버튼 누르기 ! 
    var start_btn = document.querySelector('.start_btn');
    const start_game = document.querySelector('.start_game');
    let time = 10
    let leftTime = document.querySelector('.leftTime');

    //start버튼 눌렀을때 시간초 재생
    start_game.addEventListener('click',function(){
        start_btn.style.display = 'none'
        //10초 타이머
        var Timer = setInterval(function(){
            time = time -1
            leftTime.innerHTML = time;
            // 0이되면 멈춰라
            if(time==0){
                clearInterval(Timer);
            }
        }, 1000);
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