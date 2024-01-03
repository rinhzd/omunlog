

/* 
idx : 이미지, 오디오 번호
desc : 스크립트
img: 0-없음, 1-소포라, 2-코레 3-지크
effect : in 화면 효과, out 화면 효과
choice : ['선택지1','선택지2']


    {
        idx: 1, 
        img: 0,
        name:'',
        desc:'“오늘까지 가둬둘 줄은 몰랐지.” ',
        effect: {in:'no', out:'no'},
        choice: false,
    },

*/

const dataList = [
    {
        idx: 1, img: 0, choice: false,
        name:'',
        desc:'[춤은 인간의 본능적인 몸짓으로 인간이 처음부터 가지고 태어나는 활동으로서, 환경적 외부 요인이 뇌에 전달되면 스스로 표출되는 인간 본연의 신체 활동이다. 신체의 능력과 정신의 능력은 서로 상호 영향을 미치는 것이다.]',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'',
        desc:'읽던 책을 책상 한쪽에 밀어두고 고개를 돌리면 닫힌 창문 밖으로 회색빛 도시의 밤 풍경이 눈에 들어왔다. 성탄제 분위기를 내는 화려한 불빛과 축제 장식들도.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'',
        desc:'파티와 연회를 좋아하는 타입은 아니었으니 이 또한 나쁘지 않다고 생각하면서.',
    },

    {
        idx: 1, img: 0, choice: false,
        name:'',
        desc:'소포라는 근신 중이었다. 피앙세가 됐다는 것은 숨길래야 숨길 수 없는 일이었으니 이 반응을 예상 못한 것은 아니었지만…….',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“오늘까지 가둬둘 줄은 몰랐지.”',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“......”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>야, 정신 나갔어, 소포라?</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>그렇게 리벌처에 타고 싶었나? 설마 네가 그 녀석 밑으로 기어들어 가기를 자처할 줄은 몰랐는데.</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>그런 줄 알았으면 처음부터 내 피앙세를 한다고 하지 그랬냐.</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>생각이란 게 없어? 왜 집안에 먹칠하고 난리야.</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>아니면, 뭐, 날 위해서 잘 해보던가. 최초로 슈발리에를 퍼지 시킨 피앙세라던가하핫</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>근데 무슨 생각일진 몰라도 괜히 힘 빼지는 말라고.</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'지크 아델라인',
        desc:'<i>네가 안 가면 그놈, 그냥 출격할걸?</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'파각. 자기도 모르게 손에 힘이 들어갔나 보다. 쥔 만년필이 부서지는 소리가 났다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'소포라는 빼곡히 메모가 적힌 수첩을 다시 내려다보았다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'일이 어떻게 굴러가고 있는지는 잘 모르겠지만, 다행히 그동안 소라바미의 유도는 없었다. 하지만, 당연히 유도하지 않아도 얼마든지 공습은 있을 수 있잖아.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'정신이 나간 거야, 이 집안?',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'수첩을 덮고 침대에 몸을 눕힌다. 머리 좀 식히자.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'그래, 코레를 떠올려서 분풀이한다거나.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'화를 내면서도 통쾌해하는 그 표정이 떠오르면 몸속의 열이 한결 가라앉는 것 같기도 하다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'짧은 아카데미 기억 중에서 얼마 없는 인상적인 기억들은 전부 코레와 관련된 일들이었다. 첫 만남부터 시작해서 수업, 실습, 결투……. 아카데미 생활 곳곳에 코레가 불순물처럼 껴 있었다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'아마 설명할 수는 없지만 무언가 마음을 건드렸던 것은 확실하다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'얼마 없는 기억 속에서 코레 메르쿠리는 꽤 많이도 성가셨다. 재능은 제 발끝에도 미치지 못했지만 집요하게 부딪쳐왔다. 저보다 한참 못난 재능으로 영향을 줄 수 있다니, 그것도 재능이라면 재능이었다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'‘성가시다’란 의미는 라이벌 의식도 같잖은 열등감도 아니었던 것 같다. 비가 내리는 거리를 누군가보다 빨리 질주하고 싶은 욕망은 소포라에게 없었으니까.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'차양 밑에서 비가 그치길 기다리고 있는데 그 옆으로 투덜거리며 비를 맞으며 지나가는 사람을 본 것 같았다. 그 이후에도 소포라가 변함없이 그 자리에 있는데, 그 사람이 어느샌가 다시 돌아와 이런 식으로 묻는 거다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'코레 메르쿠리',
        desc:'<i>그 우산은 뒀다 뭐하냐?</i>',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'코레는 연회에 왔겠지. 성격에 어울리지 않게 언니를 지독히 따르니까 성실하게 슈발리에를 수행하고 있을 것이다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'결국 바람맞혔다. 연습하라고 편지까지 보냈으니, 지금쯤 아마 화내고 있으려나.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“뭐…. 어차피 그 녀석도 편지 받고 질색했을 테니까….”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['그때였다.', '순간 소포라는 자신이 코레를 생각하다 헛것을 보는 게 아닐까 생각했다.'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'거꾸로 올려다보는 창문 밖으로 익숙한 금발 머리칼이 보였다. 그리고 곧이어 똑똑똑- 하는 소리까지.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“너…. 뭐야…?!”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'정신이 번쩍 들어 몸을 벌떡 일으키면 대충 창문 난간에 발을 딛고 매달려 있는 코레의 모습이 눈에 들어왔다.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'-',
        desc:'연회장은 어쩌고 설마 여길 온 것일까',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“왜, 여기까지 온 건데?”',
    },
    {
        idx: 1, img: 2, choice: false,
        name:'코레 메르쿠리',
        desc:'“너 근신이라며? 그 자식이 그러더라!!!”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'역시 이 사람은 성가시다. 아마 그 자식이라고 함은 지크를 말하는 거겠지.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'연회장에서 어떤 사건이 일어났을까. 지크가 코레에게 맞았을까? 꼴사납게 나가떨어졌을까? 아마 그런 생각들로 머릿속이 날뛰고 있을 때쯤.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'도시 전체에 크고 익숙한 경보음이 울렸다. ',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'그리고 그 소리가 환청이 아니라는 듯, 천천히 축제의 풍경 군데군데에 대피를 알리는 붉은 경고등이 더해지기 시작했다.',
    },
    {
        idx: 1, img: 2, choice: false,
        name:'코레 메르쿠리',
        desc:'“소라바미…! 물러서기나 해!!”',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“뭐…? 너 대체 뭐 하-”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['말을 하다 만 소포라가 소리 없는 비명을 질렀다.', '턱턱- 둔탁한 소리가 창문을 연달아 두드렸다. 잠깐, 그걸 누가 깰 생각을 해?'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'이런 상황에도 머릿속에서는 어떻게든 1층으로 돌아 나가는 루트를 몇 개 정도는 떠올리고 있었다. 그게 정상이고.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“기다려봐. 네가 아무리 슈발리에라도─”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['팟.', '작게 흠집처럼 생긴 흰 금은 잣대를 조각내고, 곧이어 자잘한 소리를 내며 유리창을 가득 뒤덮는다.'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'유리는 회색 모래바람만큼이나 눈앞에서 허무하게 부서져 내리고 만다.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'​저 멍청이가... 저걸 깼어?',
    },
    {
        idx: 1, img: 2, choice: false,
        name:'코레 메르쿠리',
        desc:'“역시 좋다니까, 그런 표정.”',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“……. 하아, 진짜.”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'짜릿하다며 코레가 웃으면, 기가 막혀 할 말을 잃어버린다.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“또, 이런 식이야.”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'소포라는 그제서야 깨달았다. 전부터 코레를 마주했을 때 느꼈던 이해할 수 없는 어떤 작은 기시감의 원인을.',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['이 바보는 생각할 줄을 모른다.',' 아니, 재능이 없으니 그럴 수밖에 없겠지. 그래서 눈앞의 것을 부수는 방법밖에 모른다.'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['그렇게 부수어서 기묘하게도 결국 자신에게 찾아오곤 한다. 지금처럼, 그때처럼, 갇혀 있던 소포라에게.','그것이 우연이든 운명이든…'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:'눈앞에 당연하게 내밀어진 손에 이상하게도 웃음이 나왔다.',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“피 좀 닦아. 너, 나타난 방향은 알고 있는 거야?”',
    },
    {
        idx: 1, img: 2, choice: false,
        name:'코레 메르쿠리',
        desc:'“알거든! 그리고, 몰라도... 네가 알고 있겠지.”',
    },
    {
        idx: 1, img: 1, choice: false,
        name:'소포라 아델라인',
        desc:'“……. 그래. 수습할 고민을 뒤로 미뤄줘서 고맙네.”',
    },
    {
        idx: 1, img: 2, choice: false,
        name:'코레 메르쿠리',
        desc:'“좋아, 그럼 가자고!”',
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['지금 해야 할 일을 안다.', '머리보다 먼저 움직이는 다리가 말한다.'],
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['적어도 소포라에게 본능이란, 춤보다는 ‘지금’ 이 순간에 가까운 것이라고','네가 알려 주었다.']
    },
    {
        idx: 1, img: 0, choice: false,
        name:'-',
        desc:['두 쌍의 다리가 사이렌 소리에 맞춰 춤을 추듯 한 곳을 향한다.', '붉은 등이 비추는 아래에서─'],
    },
]


