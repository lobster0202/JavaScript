/*  스프레드 문법 ( ... ) <- 이거 ...이 문법임 
    하나로 뭉쳐져 있는 여러 값들의 집합을 전개해서 
    개별적인 값들의 목록으로 만든다.                

    ex) {1,2,3},{a,b,c},{가,나,다}
    {1,2,3,a,b,c,가,나,다}              */

/* let arr = [2, 5, 15] 
    ...arr = {2,5,15}  
    arr같은 변수의 이름은 상관이 없다.*/




let arr = [2, 5, 15]
console.log(`가장 큰 값 : ${Math.max(arr)}`);                   // NaN

/* Math.max : 배열을 넣는게 아니라 여러가지 인수를 넣는 함수 */
console.log(`가장 큰 값 : ${Math.max(2, 5, 15)}`);              // 15


// 함수르 호출할 때 ...arr을 사용하면 arr이 인수 목록으로 확장된다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);                // 15

let arr1 = [5, 8, 22];
let arr2 = [34, 55, 97];

// 배열 객체 여러 개 전달 가능
console.log(`가장 작은 값 :  ${Math.min(...arr1, ...arr2)}`);


// 일반 값과 혼합해서 사용 가능
console.log(`가장 작은 값 : ${Math.min(1, ...arr1, 3, ...arr2, 7)} `);

// 배열 병합에도 사용 가능(concat 보다 간결하게 사용 가능)
let merged = [0, ...arr, 2, ...arr2]
console.log(merged);

let str = "JavaScript";
console.log([...str]);      //문자열을 배열로 반환







