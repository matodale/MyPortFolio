let curPos = 0;                                                     // 현재 보여주는 인덱스 번호
let positionValue = 0;                                              // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 640;
const prevBtn = document.querySelector(".prev");                    // class .prev 인 버튼
const nextBtn = document.querySelector(".next");                    // class .next 인 버튼
const images = document.querySelector(".images");                   // class .image 인 div 
const countImage = document.getElementsByClassName("sliderTest");   // 이미지 갯수 
// console.log(countImage.length);
let countCurPos = countImage.length;                                // 이미지 갯수 변수가 너무 길어서 let 타입인 countCurPos로 저장함.

function next(){                                                    // 다음 버튼에 기능 부여
    if(curPos < countCurPos-1){
        prevBtn.removeAttribute('disabled');                        // 이전 버튼의 색상을 뺴버림.
        positionValue -= IMAGE_WIDTH;                               // 이미지 태그의 위치 값을 이미지 전체 사이즈인 640으로 단계적으로 빼줌.
        images.style.transform = `translateX(${positionValue}px)`;  // .images 클래스에 CSS 속성을 추가함.
        curPos += 1;                                                // 위의 과정을 진행 후 curPos 변수에 1을 더함.
    }
    if(curPos === countCurPos-1){
        nextBtn.setAttribute('disabled', true);                     // curPos 변수의 값이 이미지의 갯수와 같아지면 다음 버튼을 비활성화 함.
    }
}

function prev(){                                                    // 이전 버튼에 기능 부여
    if(curPos > 0){
        nextBtn.removeAttribute('disabled');
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    }
    if(curPos === 0){
        prevBtn.setAttribute('disabled', true);
    }
}

function init(){
    prevBtn.setAttribute('disabled', true);                          // 처음 슬라이더 화면 일때 왼쪽 버튼이 비활성화
    prevBtn.addEventListener("click", prev);                         // 버튼에 클릭 이벤트 활성화
    nextBtn.addEventListener("click", next);                         // 버튼에 클릭 이벤트 활성화
}
init();


