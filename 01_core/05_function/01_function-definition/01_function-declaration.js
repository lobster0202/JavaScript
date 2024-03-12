// declaration : 변수, 함수, 클래스 또는 다른 구성 요소를 정의하거나 선언하는 것

/* 함수 선언문(function declaration)  */

function hello(name) {
    return `${name}님 안녕하세요 :>`;
}

/*  JS 엔진은 생성된 함수를 호출하기 위해 
    함수 이름과 동일한 식별자를 암묵적으로 생성하고 */

// var hello = function hello(name) {
//     return `${name}님 안녕하세요 :>`;
// }

// 여기서 hello는 함수를 호출한게 아니고 함수 안에 있는 식별자를 호출 한 것 
console.log(hello('판다'));
