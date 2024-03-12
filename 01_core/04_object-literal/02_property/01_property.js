/*  1.property 
    객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성돼있다. */

var idol = {
    name : 'BTS',
    count : 7,
}

console.log(idol);

var testObj = {
    normal : 'normal value',                //
    '@ s p a c e @' : 'space value',
    '' : '',                                // 빈 문자열 키는 오류 발생하지는 않지만 권장하지 않는다. 키 값이 빈값이면 식별이 어려움
    0 : 1,                                  // 숫자(실수 포함) 키는 내부적으로 문자열로 변환된다.
    var : 'var',                            // 예약어 키는 오류가 발생하지 않지만 권장하지 않는다. 
    normal : 'new normal value'             // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.
}

var key = 'test';
// 프로퍼티 키 동적 생성
testObj[key] = 'test value';

console.log(testObj);

/*  프로퍼티 추가 순서는 정수 프로퍼티(integer property)는 자동 정렬되고
    그 외 프로퍼티는 객체에 추가한 순서 그대로 정렬 */




