/*  배열 구조 분해 할당
    구조 분해 할당을 사용하면 배열이나 객체를
    변수로 분해하여 연결 할 수 있다. */

let nameArr = ["Gildong", "Hong"];

// let firstName = nameArr[0] ;
// let lastName = nameArr[1] ;

/* 이거 자체가 구조 분해 할당을 하겠다는 뜻 
마지 배열 자체를 매개변수처럼 쓰는거 같다. */
let [firstName1, lastName1] = nameArr;


console.log(firstName1);
console.log(lastName1);

/* split :  반환값이 배열이다. 
.split(' ') : 띄어쓰기를 기준으로 분리한 값을 배열로 변환해준다.  */
let [firstName2, lastName2] = "Saimandang Shin".split(' ')

console.log(firstName2);
console.log(lastName2);



let arr = ['first', 'middle', 'last']
// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있다.
let [first3, , last3] = arr;

console.log(first3);
console.log(last3);