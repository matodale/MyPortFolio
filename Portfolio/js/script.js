// 헤더 영역 스크롤시 투명 배경 검정색으로 변화줌
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollX = window.innerWidth;
    const browerScrollY = window.pageYOffset;
    console.log("x 값 : "+ browerScrollX);
    console.log("y 값 : "+ browerScrollY);
    // 각 브라우저 가로 세로 크기에따라 header에 active 클래스 속성 추가
    if(browerScrollY > 800 || (browerScrollX < 737 && browerScrollY > 400) || (browerScrollX < 376 && browerScrollY > 300.5)){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
});