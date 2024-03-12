// nullish : 확실하게 null이거나, undefined 인것을 의미
// Coalesce : 결합하다. 여러 가지 요소나 값을 하나로 합치는 것을 의미

/* 4. nullish coalescing operator(null 병합 연산자) */

/*  ES11에서 도입된 연산자
    좌항의 피연산자가 NULL또는 undefined인 경우
    우항의 피연산자를 반환하고
    그렇지 않으면 좌항의 피연산자를 반환한다.
    (변수에 기본 값을 설정할 때 유용하다.)      */ 

var test = null ?? 'default';
console.log(test);

// null 병합 연산자 이전에는 논리연산자 ||를 사용한 단축 평가로 변수에 기본값을 설정했다.

var value = ''|| 'default';

console.log(value);

var value = '' ?? 'default';

