/* 이번 파트의 목표
나머지 매개변수 : ...args 를 배우는 것 */

function merge(msg1, msg2) {
    return msg1 + msg2
}

console.log(merge('안녕하세요'));                                            // 안녕하세요undefined
console.log(merge('안녕하세요','반갑습니다.'));                               // 안녕하세요반갑습니다.
console.log(merge('안녕하세요','반갑습니다.','제 이름은 판다 입니다.'));        // 안녕하세요반갑습니다. 

function mergeAll(...args){
    let message = '';
    for(let arg of args) message += arg;
    return message;
}

console.log(mergeAll('안녕하세요'));                                            
console.log(mergeAll('안녕하세요','반갑습니다.'));                               
console.log(mergeAll('안녕하세요','반갑습니다.','제 이름은 판다 입니다.'));

/* 유의할 점 : 나머지 매개변수의 위치는 항상 마지막에 와야한다.  
function func(arg1, arg2, ...args, arg3) {} -> ( X ) 
function func(arg1, arg2, ...args) {} -> ( O )*/