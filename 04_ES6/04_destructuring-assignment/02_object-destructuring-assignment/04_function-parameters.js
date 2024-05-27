// 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등 활용된다.



/* 함수는 넘겨주는 인수의 순서가 고정되어 있어 순서가 바꾸미녀 문제가 생기고
    기본 값 사용시에도 undefined를 이용해야 한다. */
// function displayProduct(producer = "아무개", width = 0, height = 0, items = []) {}
// displayProduct("신사임당",  ["coffee", "Donut"]);



/* 구조 분해 할당을 이요하면 문제가 해결된다.  
let {producer, width, height, items} = obj; 로 구조분해 할당 하겠다는 뜻*/
function displayProduct({producer = "아무개", width = 0, height = 0, items = []}) {}
displayProduct("신사임당", undefined, undefined, ["coffee", "Donut"]);

function displayProduct({producer ="아무개", width = 0, height=0,items=[]}) {
    console.log(producer);
    console.log(width);
    console.log(height);
    console.log(items);
}

// 함수에 전달할 객체
let exampleProduct = {
    items : ["coffee", "Donut"],
    producer : "신사임당"
}

// 순서도 무관하고 기본 값 활용 시에도 별도의 처리가 불필요하다. 
displayProduct(exampleProduct);






