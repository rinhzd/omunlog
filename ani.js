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



setTimeout(function(){
$('#element').typeIt({
    strings: dataList[1].desc,
    speed: 70,
    autoStart: true,
    waitUntilVisible: true,
    });


}, 2000);


