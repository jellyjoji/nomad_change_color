// if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. 참고 자료
// classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. 참고 자료
// remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 참고 자료에서 확인할 수 있습니다.
// add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 참고자료에서 확인할 수 있습니다.
// innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. 참고자료
// 움직임에 따라 색상이 달라진다. 늘어날때 클래스리스트 에드를 한다. 줄어들때 클래스리스트 리무브를 한다. 
// 기본 : 보라색 / 늘일때 : 노란색 /  줄일때 : 파란색 / window 사이즈 조절과 관련이 있음. 

const text = document.querySelector("body");

function resized(){
    const yellowClass = "yellow";
    const blueClass = "blue";
    if ( window.innerWidth <= 800 ) {
        text.classList.add(yellowClass);
        text.classList.remove(blueClass);
    } else if (window.innerWidth >= 800){
        text.classList.remove(yellowClass);
        text.classList.add(blueClass);
    }else { 
        text.classList.remove(yellowClass);
        text.classList.remove(blueClass);
    }
}


window.addEventListener("resize", resized)