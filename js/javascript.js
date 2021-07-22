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
let leftTime, time, timer
let header = document.querySelector('header')
const game_next_text = document.querySelector('.game_next_text'); // 단어추리 텍스트
let wrongWordsList = new Set(); //틀린 단어 배열
let addWordArr = new Set(); // 즐겨찾기 단어 배열
let wrongWord_words = document.querySelector('.wrongWord_words'); // 영단어장 오답단어 ul
let wrongWord_words_text = document.querySelectorAll('.wrong_word_text'); // 영단어장 오답단어 p
let addWord_wordsList = document.querySelector('.addWord_words'); // 영단어장 즐겨찾기 ul
let addWord_words_text = document.querySelectorAll('.addWord_text'); //영단어장 즐겨찾기 p
let addWord_words_view = document.querySelector('.addWord_words_view'); // 영단어장 즐겨찾기
let wB_revise = document.querySelector('.wB_revise');
let kind_of_wordBook = document.querySelector('.kind_of_wordBook');
let wB_leftBtn = document.querySelector('.wB_leftBtn')
let wB_rightBtn = document.querySelector('.wB_rightBtn')
//1.생성 p 2.생성 li  3.생성한단어의 순번 4.생성한 단어의 첫번째 알파벳
//5.a to z에서 첫번째 알파벳의 순번 6.누른 단어가 배열의 몇번째에있는지  

let addP, addLi, whatNumber, whatAlphabets, whatAlphabetsNum, whatWordNum, clickWord
let alphabetsArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let wrongP, wrongLi
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
    nav[1].addEventListener('click',function(){
        game_next_text.innerHTML = "게임시작"
    })
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

function wbShowWord(){
    let wb_changeImg = document.querySelector('.wb_wordImg')
    let wb_change_word_En = document.querySelector('.wb_changeWord')
    let wb_change_word_Pron = document.querySelector('.wb_changePron')
    let wb_change_word_Kr1 = document.querySelector('.wb_change1Kr')
    let wb_change_word_Kr1Sen = document.querySelector('.wb_change1Sen')
    let wb_change_word_Kr1SenKr = document.querySelector('.wb_change1SenKr')
    let wb_change_word_Kr2 = document.querySelector('.wb_change2Kr')
    let wb_change_word_Kr2Sen = document.querySelector('.wb_change2Sen')
    let wb_change_word_Kr2SenKr = document.querySelector('.wb_change2SenKr')
    let wb_change_word_Kr3 = document.querySelector('.wb_change3Kr')
    let wb_change_word_Kr3Sen = document.querySelector('.wb_change3Sen')
    let wb_change_word_Kr3SenKr = document.querySelector('.wb_change3SenKr')
    console.log(whatNumber) // 누른단어의 배열에서의 몇번째 순서
    console.log([...addWordArr][whatNumber]) // 누른 영단어
    console.log(whatAlphabets) // 누른 단어의 첫번째 알파벳
    console.log(whatAlphabetsNum) // A to Z 에서 첫번째 알파벳의 순번
    console.log(wordsArr[whatAlphabetsNum]) // 첫번째 알파벳으로 시작하는 배열
    console.log(whatWordNum) // 누른단어가 배열에 몇번째에 있는지 !
    clickWord = wordsArr[whatAlphabetsNum][whatWordNum]

    //텍스트 변화 !!!
    
    wb_change_word_En.innerHTML = [...addWordArr][whatNumber]
    wb_change_word_Pron.innerHTML = clickWord.word_En_pron
    wb_change_word_Kr1.innerHTML = clickWord.meaning_Kr1
    wb_change_word_Kr1Sen.innerHTML = clickWord.meaning_Kr1_sen
    wb_change_word_Kr1SenKr.innerHTML = clickWord.meaning_Kr1_senMeaning
    wb_change_word_Kr2.innerHTML = clickWord.meaning_Kr2
    wb_change_word_Kr2Sen.innerHTML = clickWord.meaning_Kr2_sen
    wb_change_word_Kr2SenKr.innerHTML = clickWord.meaning_Kr2_senMeaning
    wb_change_word_Kr3.innerHTML = clickWord.meaning_Kr3
    wb_change_word_Kr3Sen.innerHTML = clickWord.meaning_Kr3_sen
    wb_change_word_Kr3SenKr.innerHTML = clickWord.meaning_Kr3_senMeaning
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

    //버튼클릭시 이미지 변경
    leftBtn.addEventListener('mousedown',leftMouseDownImgChange)
    leftBtn.addEventListener('mouseup',leftMouseUpImgChange)
    rightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    rightBtn.addEventListener('mouseup',rightMouseUpImgChange)

    //알파벳 기능 
    alphabets.forEach ((element,index) => {
        element.addEventListener('click',alphabetsColorChange)
        element.addEventListener('click',alphabetsCheckAndShuffle)
        element.addEventListener('click',wordTextChange)


//==============더블클릭하면 전체랜덤 개발예정===========================
        // element.addEventListener('dblclick',function(){
        //     alphabets.forEach ( i => {
        //         i.style.background = "none";
        //         i.style.color = "#6a6a6a";
        //     })
        //     //더블클릭하면 전체 랜덤 
        //     console.log(wordsArr[1])
        //     console.log(Math.floor(Math.random() * wordsArr.length))
        // })
//==============더블클릭하면 전체랜덤 개발예정===========================



        //셔플
        function alphabetsCheckAndShuffle(){
            //알파벳 누를때마다 currentWord 순번 0으로 초기화
            currentWord = 0
            console.log(currentWord)
            //알파벳 번호 currentAlphabet 변경
            currentAlphabet = index;
            //currentAlphabet의 값에 따라 단어 배열 가져오고
            var currentAlphabetArr = wordsArr[currentAlphabet]
            shuffle(currentAlphabetArr)
            rightBtn.style.opacity = '1';
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
    //단어 처음이나 끝으로가면 버튼 스타일변화
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
            addLi = document.createElement('li');
            addP = document.createElement('p');
            addP.classList.add('addWord_text')
            addP.append(change_word_En.innerHTML);
            addWord_wordsList.append(addLi);
            addLi.append(addP)

            //새로만든 리스트에 이벤트 추가 추가해서 
            // 눌렀을때 설명보여줌
            //보여주고 리스트 순서대로 
            addP.addEventListener('click',function(){
                header.style.display = "none"
                kind_of_wordBook.style.display = 'none'
                addWord_words_view.style.display = 'none';
                wB_revise.style.display = 'flex'
                //whatNumber에 누른단어의 순번이 몇번째인지 출력
                whatNumber = [...addWordArr].indexOf(this.innerHTML);

                //여기에 이벤트 줘보자 누르면 감소되는걸로 
                //밑에서는 whatNumber을 변경 못해서 여기에 미리 준다.
                wB_leftBtn.addEventListener('click',function(){
                    whatNumber = whatNumber-1
                })
                wB_rightBtn.addEventListener('click',function(){
                    whatNumber = whatNumber+1
                })
                for( let i=0; i<1; i++){
                    whatAlphabets = [...addWordArr][whatNumber][i]; // 누른 단어의 첫번째 알파벳 추출
                }
                alphabetsArr.forEach( (i,e) => {
                    if( whatAlphabets == i){
                        whatAlphabetsNum = e; // 첫번째 알파벳의 순번(영어 알파벳에서의)
                    }
                })
                wordsArr[whatAlphabetsNum].forEach( (i,e) => {
                    if( i.word_En == [...addWordArr][whatNumber]){
                        whatWordNum = e;
                    }
                })
                wbShowWord()
            })
        }
        //배열에 단어추가하기 !
        addWordArr.add(change_word_En.innerHTML)
    }
}
AtWord()
////////////////////// 단어추리 /////////////////////////
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
        game_next_text.innerHTML = "다음문제"
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
        input.value = ""
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
        wrongWord = 0
        //input에 입력창다시 비우기 
        input.value = ""
        //포함되는 값이 있으면 opacity 1로 변경 
        if( result.includes(inputValue) == true){
            result.forEach( (i,e) => {
                if ( i == inputValue){
                    result[e] = ''; // 배열에 같은 값은 공백으로 만들어준다
                    gamePoint = gamePoint + 1 // 중복된 알파벳전부계산해서 점수 +
                }
            })
            game_word_text.forEach( i => {
                if( i.innerHTML == inputValue){
                    i.style.opacity = '1'
                }
            })
        }else {
            life = life - 1
            leftLife.innerHTML = life;
            if(life == 0 ){
                gamePoint = 0
                input.style.display = 'none'
                lifeImg.src = 'img/gameLose.png'
                game_word_text.forEach( i => {
                    i.style.opacity = '1'
                })
            }
        }
        console.log(result)
        console.log(inputValue)
        console.log(gamePoint)
        console.log(life)
        if(gamePoint == result.length ){
            gamePoint = 0
            input.style.display = 'none'
            lifeImg.src = 'img/gameWin.png'
        }
    }
}
Atgame1()

///////////////////// 단어 퀴즈 /////////////////////
function AtQuiz(){
    let start_btn = document.querySelector('.start_btn');
    const start_game = document.querySelector('.start_game');
    time = 10
    leftTime = document.querySelector('.leftTime');
    let number_number = document.querySelectorAll('.number_number');
    let quest_correct = document.querySelectorAll('.quest_correct');
    let quest_wrong = document.querySelectorAll('.quest_wrong');
    const quizRightBtn = document.querySelector('.quiz_right_Btn');
    const question_word = document.querySelector('.question_word');
    const number_text = document.querySelectorAll('.number_text');
    let correctArr = [];
    let quizRandomWords, quizRandomArr2, quizWordKr
    

    //다음문제 버튼 클릭시 이미지 변경
    quizRightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    quizRightBtn.addEventListener('mouseup',rightMouseUpImgChange)
    quizRightBtn.addEventListener('click',function(){
        init()
        QuizRandomWord()
    })
    
    //start버튼 눌렀을때 시간초 재생
    start_game.addEventListener('click',function(){
        init()
        start_btn.style.display = 'none'
        QuizRandomWord()
        //10초 타이머
    })
    function startTimer(){
        timer = setInterval(function(){
            time = time -1
            leftTime.innerHTML = time;
            //0초가 되면 답을 알려줌 
            if( time == 0){
                stopTimer()
                number_text.forEach ((i,e) => {
                    if( i.innerHTML == correctArr[correctArr.length -1]){
                        quest_correct[e].style.display = 'unset'
                    }
                })
            }
        },1000)
    }
    //clearTimeout으로 setinterval을 그냥 종료 ! 정지가 아닌 종료 시킴 !
    function stopTimer(){
        clearTimeout(timer)
    }

    //각각의 번호에 이미지보이기 이벤트 추가
    //정답을 배열에 추가해서 마지막배열과 클릭한 텍스트를 비교해서 판단함
    number_number.forEach( (i , e) => {
        i.addEventListener('click',function(){
            if( number_text[e].innerHTML == correctArr[correctArr.length -1]){
                quest_correct[e].style.display = 'unset'
                stopTimer()
            }else{
                quest_wrong[e].style.display = 'unset'
                //눌렀을때 틀리면 배열에 추가 ! 
                addWrongWord()
                console.log(question_word.innerHTML)
            }
        })
    })
    //Set객체로 중복되는 배열 생성 X 
    function addWrongWord(){
        //문제의 영단어가 배열에 없을 때만 영단어장에 추가 ! 
        if([...wrongWordsList].includes(question_word.innerHTML) == false){
            const li = document.createElement('li'); // li생성
            const p = document.createElement('p'); // p생성
            p.classList.add('wrong_word_text')
            p.append(question_word.innerHTML); // p에 보기 문제 생성
            wrongWord_words.append(li); //
            li.append(p)
        }
        wrongWordsList.add(question_word.innerHTML) // set객체에 문제영단어 추가
        console.log(wrongWordsList)
    }

    //전체랜덤
    function Randomfunction(){
        //알파벳 종류를 먼저 선별
        randomArr = Math.floor(Math.random() * wordsArr.length)
        quizRandomWords = wordsArr[randomArr]
        // 고른 알파벳에서 랜덤으로 선별 !
        quizRandomArr2 = Math.floor(Math.random() * quizRandomWords.length)
    }

    function QuizRandomWord(){
        Randomfunction()
        //가져온 단어 변수에 담기
        let quizWord = quizRandomWords[quizRandomArr2].word_En;
        question_word.innerHTML = quizWord; //문제 영단어

        //보기 랜덤으로 추출 ! 
        quizWordKr = quizRandomWords[quizRandomArr2].meaning_Kr1;
        let randomNum = Math.floor(Math.random() * number_number.length)
        //랜덤으로 뽑아낸 index번호에 텍스트 수정 !
        number_text[randomNum].innerHTML = quizWordKr
        correctArr.push(number_text[randomNum].innerHTML);
        //정답을 배열에 넣어서 그 배열의 마지막의 값이랑 새로들어갈 보기의 값이랑 비교해서 
        //같으면 랜덤을 한번더 돌린다 ! 
        number_text.forEach( i => {
            Randomfunction()
            quizWordKr = quizRandomWords[quizRandomArr2].meaning_Kr1

            //보기의 단어길이가 0 이고 정답과의 단어와 겹치지 않으면 단어 생성
            if( i.innerHTML.length == 0 ){
                if(quizWordKr != number_text[randomNum].innerHTML){
                    i.innerHTML = quizWordKr
                }
                //정답이랑 단어가 겹치면 랜덤 다시 ! 
                else{
                    Randomfunction()
                    quizWordKr = quizRandomWords[quizRandomArr2].meaning_Kr1
                    i.innerHTML = quizWordKr
                }
            }else {
                return ; 
            }
        })
    }
    //보기를 눌렀을때 정답이랑 비교해서 같으면 o 아니면 x 나오면서 clearTimeout발동
    


    function init(){
        leftTime.innerHTML = 10
        time = 10
        stopTimer()
        startTimer()
        number_text.forEach ( i => {
            i.innerHTML = ""
        })
        quest_correct.forEach ( i => {
            i.style.display = 'none'
        })
        quest_wrong.forEach ( i => {
            i.style.display = 'none'
        })
    }
}
AtQuiz()

///////////////////// 영단어장 //////////////////////

//단어장 선택
function AtWordBook(){
    const wrongWords = document.querySelector('.wrongWords');
    const addWord = document.querySelector('.addWord');
    const wrongWord_words_view = document.querySelector('.wrongWord_words_view');
    let wordBookrevise_closeBtn = document.querySelector('.wordBookrevise_closeBtn');
    
    wrongWords.addEventListener('click',function(){
        wrongWords.style.background = '#707070';
        wrongWords.style.color = '#fff';
        addWord.style.background = '#fff';
        addWord.style.color = '#707070';
        wrongWord_words_view.style.display = 'unset';
        addWord_words_view.style.display = 'none';
        console.log([...wrongWordsList])
    })
    addWord.addEventListener('click',function(){
        wrongWords.style.background = '#fff';
        wrongWords.style.color = '#707070';
        addWord.style.background = '#707070';
        addWord.style.color = '#fff';
        wrongWord_words_view.style.display = 'none';
        addWord_words_view.style.display = 'unset';
    })
    wordBookrevise_closeBtn.addEventListener('click',function(){
        header.style.display = "unset"
        kind_of_wordBook.style.display = 'flex'
        addWord_words_view.style.display = 'block';
        wB_revise.style.display = 'none'
    })
    wB_leftBtn.addEventListener('mousedown',leftMouseDownImgChange)
    wB_leftBtn.addEventListener('mouseup',leftMouseUpImgChange)
    wB_rightBtn.addEventListener('mousedown',rightMouseDownImgChange)
    wB_rightBtn.addEventListener('mouseup',rightMouseUpImgChange)

    wB_leftBtn.addEventListener('click',function(){
        //이전단어의 뜻과 사진 등등등이 나옴 !
        wbShowWord()
    })
    wB_rightBtn.addEventListener('click',function(){
        wbShowWord()
    })

    //다음단어나 이전단어를 보여줌 
    //해당 단어를 눌렀을때 배열 item이랑 p의 innerHtml이랑 같으면 word번호 출력
    //
}
AtWordBook()

