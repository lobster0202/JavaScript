// 객체 구조 분해 할당

let toy = {
    productName : "티니핑",
    color : "노랑",
    price : 25000
};

/* toy라는 객체를 구조 분해 할당한다. 
key와 value값으로 된다. */
let {productName, color, price} = toy;

console.log(productName);
console.log(color);
console.log(price);1

// 각 변수의 서술 순서는 무관하며 {객체 프로퍼티 : 목표 변수} 형식으로 작성할 수 있다.
let {color : co, price : pr, productName : pn} = toy;
console.log(co);
console.log(pr);
console.log(pn);