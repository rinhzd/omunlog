// $('#element').typeIt({
//     strings: ["춤은 인간의 본능적인 몸짓으로 인간이 처음부터 가지고 태어나는 활동으로서, 환경적 외부 요인이 뇌에 전달되면 스스로 표출되는 인간 본연의 신체 활동이다. ", "신체의 능력과 정신의 능력은 서로 상호 영향을 미치는 것이다."],
//     speed: 80,
//     autoStart: true,
//     waitUntilVisible: true,
//     });

// setTimeout(function(){

// $('#element2').typeIt({
//     strings: ["This one gets deleted.", "This one replaces it."],
//     speed: 80,
//     breakLines: false,
//     autoStart: false,
//     });


// }, 4444);

const cover = document.querySelector("#cover");
const main = document.querySelector("#main");
const end = document.querySelector("#end");
const bgm = document.querySelector("#audio");
const bgImg1 = document.querySelector("#img-bg1");
const bgImg2 = document.querySelector("#img-bg2");

const endPoint = dataList.length-1;

let timer; // setTimeout
let Idx; //현재번호
let script; //스크립트
let complete = false; // 스크립트 종료
let lastBG = 2;

let sound = new Audio('./audio/effect_click.wav');
sound.volume = 0.5;


function goNext(Idx) {
   
    

    //bgm 변경
    changBGM();

    //배경 효과 
    if(dataList[Idx].effIn !== undefined) {
        ImgEffect('fadeIn');
    }
   
    //이름이 존재하면 해당 이름으로 변경
    var name = document.querySelector(".name");
    if(dataList[Idx].name) {
        name.innerHTML = dataList[Idx].name;
    }
    else {
        name.innerHTML = '-';
    }
    
    // 이미지가 존재하면 해당 이미지 src로 변경
    var img = document.querySelector(".img");
    if(dataList[Idx].img) {
        let src = './images/charactor-' + dataList[Idx].img + '.png';
        img.setAttribute('src',src);
    }
    else {
        img.setAttribute('src','');
    }


    complete = false;
    script = new TypeIt('#element', {
        afterComplete: () => {
            complete = true;
        },

        strings: dataList[Idx].desc,
        speed: 60,
        autoStart: true,
        startDelay: 900,
    }).go();


}


function nextScript(){

    sound.play();
    if(Idx === endPoint) {
        return;
    }

    if(complete){
        //타이핑 종료 일때 
        if(dataList[Idx].effOut !== undefined) {
            ImgEffect('fadeOut');
        }
    
        timer = setTimeout(() => {
            script.reset(); /* 스크립트 초기화 */
            goNext(++Idx); /* 숫자 증가해서 다음 스크립트 호출*/
        }, 900)
    }
}


function skipScript(){

    sound.play();
    if(Idx === endPoint) {
        return;
    }

    script.pause(1000);
    if(dataList[Idx].effOut !== undefined) {
        ImgEffect('fadeOut');
    }

    timer = setTimeout(() => {
        script.reset(); /* 스크립트 초기화 */
        goNext(++Idx); /* 숫자 증가해서 다음 스크립트 호출*/
    }, 900)

}

function changBGM(){


    if(Idx === 35) {
        bgm.volume="0.5";
    }

    else if(Idx === 36) {
        bgm.volume="0.2"
    }

    else if(Idx === 37) {
        bgm.volume="0"
    }

    else if(Idx === 38) {
        bgm.src = "./audio/audio-3.mp3";
        bgm.currentTime = 0;
        bgm.volume="0.2"
        bgm.play();
    }

    else if(Idx === 39) {
        bgm.volume="0.4"
    }

    else if(Idx === 40) {
        bgm.volume="0.6"
    }

    else if(Idx === 40) {
        bgm.volume="0.8"
    }
}

function ImgEffect(effect){


    if(effect === 'fadeIn') {
        let src = 'background-image:url(./images/img_bg-' + dataList[Idx].bg + ')';
        if (lastBG === 1) {
            bgImg2.setAttribute('style', src);
            fadeIn(bgImg2);
            fadeOut(bgImg1);
            lastBG = 2;
        }
        else if(lastBG === 2) {
            bgImg1.setAttribute('style', src);
            fadeIn(bgImg1);
            fadeOut(bgImg2);
            lastBG = 1;
        }
    }
  
    else if (effect === 'fadeOut') {
        if (lastBG === 1) {
            fadeOut(bgImg1);
        }
        else if(lastBG === 2) {
            fadeOut(bgImg2);
        }
    }


}

function fadeIn (bgImg) {

    bgImg.style.WebketAnimation ="fadeIn 3s forwards";
    bgImg.style.animation ="fadeIn 3s forwards";
}
function fadeOut (bgImg) {
    bgImg.style.WebketAnimation ="fadeOut 2s forwards";
    bgImg.style.animation ="fadeOut 2s forwards";
}


function begin(){

    cover.style.WebketAnimation ="fadeOut 2s";
    cover.style.animation ="fadeOut 2s";
    timer = setTimeout(function(){
        main.style.WebketAnimation ="fadeIn 2s";
        main.style.animation ="fadeIn 2s";
        timer = setTimeout(() => {
            cover.style.display="none";
            main.style.display ="block";
            }, 900);
            

            bgm.play();

            Idx = 0;
            goNext(Idx);
    }, 900);       
}



