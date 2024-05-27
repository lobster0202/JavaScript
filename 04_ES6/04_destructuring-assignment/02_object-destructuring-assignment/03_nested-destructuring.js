// 중첩 구조 분해 할당

let lunchSet = {
    burger : {
        main : "소고기",
        sub:  "치즈",
        vegetable : "토마토"
    },
    side : ["치즈스틱, :감자튀김"],
    price: 9000
}

// 정의 되지 않은 애도 정의 해줄수 있음.
let {
    burger : {
        main, 
        sub, 
        vegetable
    }, 
    side : [side1, side2], 
    price, 
    orderNo = "order-001"
} = lunchSet;

console.log(`burger : ${main} + ${sub} + ${vegetable}`);
console.log(`side : ${side1},${side2}`);
console.log(price);
console.log(orderNo);