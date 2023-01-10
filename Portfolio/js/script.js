// 헤더 영역 스크롤시 투명 배경 검정색으로 변화줌
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollX = window.innerWidth;
    const browerScrollY = window.pageYOffset;
    // console.log("x 값 : "+ browerScrollX);
    // console.log("y 값 : "+ browerScrollY);
    // 각 브라우저 가로 세로 크기에따라 header에 active 클래스 속성 추가
    if(browerScrollY > 800 || (browerScrollX < 737 && browerScrollY > 400) || (browerScrollX < 376 && browerScrollY > 300.5)){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
});

(function(){
// span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher.', 'Front-End Developer.', 'Java Spring Developer.', 'UI/UX Designer.' ,'Back-End Developer.'];
// 배열 인덱스 초기값
let index = 0;
// 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift(); 
    // 배열의 요소를 앞에서부터 하나씩 출력. shift() 메서드는 배열에서 맨 앞의 요소를 추출하고 추출한 요소를 원본 배열에서 삭제한다.
    if(currentTxt.length !== 0){
        // 배열의 크기가 0 인지 확인. 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));

    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
writeTxt();

function deleteTxt(){
    currentTxt.pop(); // pop() 메서드로 끝에서 한 개씩 삭제합니다.
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
})();

/* 애니매이션 스크롤 이동 */
const animationMove = function(selector){
    // selector  매개변수로 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // 현재 웹 브라우저의 스크롤 Y 값
    const browerScrollY = window.pageYOffset;
    // 이동할 대상의 위치 (y값)
    const targetScorlly = targetEl.getBoundingClientRect().top + browerScrollY;
    // 스크롤 이동
    window.scrollTo({top:targetScorlly, behavior:'smooth'});
};

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}