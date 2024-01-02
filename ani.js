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

const endPoint = 10;
let Idx; //현재번호
let script; //스크립트

let complete = false;


let sound = new Audio('./audio/effect_click.wav');
sound.sound = 0.5;


function goNext(Idx) {
   

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

    // 스크립트 타이핑 효과
    // setTimeout(() => {
    //     $('#element').typeIt({
    //         strings: dataList[qIdx].desc,
    //         speed: 60,
    //         autoStart: true,
    //         startDelay: 450,
    //         waitUntilVisible: true,
    //         });
    
    // }, 450);   
    // $('#element').typeIt({
    //     strings: dataList[Idx].desc,
    //     speed: 60,
    //     autoStart: true,
    //     startDelay: 500,

    //     afterComplete: () => {
    //         console.log("종료");
    //     },
    // });

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

    
    // box.addEventListener("click", function() {
    //     // 삑 효과음 재생
    //     sound.play();

    //     setTimeout(() => {
    //         goNext(++Idx); /*질문증가해서 또 호출*/
    //     }, 450)
    // }, false);
}


function nextScript(){

    sound.play();

    if(complete){
        //타이핑 종료 일때 
        setTimeout(() => {
            script.reset();
            goNext(++Idx); /*질문증가해서 또 호출*/
        }, 900)
    }
    else {
   
    }


}

function begin(){

    cover.style.WebketAnimation ="fadeOut 2s";
    cover.style.animation ="fadeOut 2s";
    setTimeout(function(){
        main.style.WebketAnimation ="fadeIn 2s";
        main.style.animation ="fadeIn 2s";
        setTimeout(() => {
            cover.style.display="none";
            main.style.display ="block";
            }, 900);
            

            bgm.play();

            Idx = 0;
            goNext(Idx);
    }, 900);       
}



