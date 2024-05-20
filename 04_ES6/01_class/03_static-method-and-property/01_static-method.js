/* 정적 메소드와 프로퍼티에 대해서 배우는 파트 */




class Student {

    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    /* 정적 메소드를 쓰기 위해서는 클래스 선언부 앞에 static이라는 단어를 붙인다. */
    static compare(studentA, studentB) {
        return studentA.height - studentB.height;
    }
}

let Students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.5),
    new Student('선덕여왕', 159.5)
];

Students.sort(Student.compare);
console.log(Students);


/* staticMethod는 메소드 프로퍼티 형태로 직접 할당하는 것과 동일하다. */

Student.staticMethod = function() {
    console.log('staticMethod는 메소드 프로퍼티 형태로 직접 할당하는 것과 동일하다.');
}

Student.staticMethod();

// 12 15
class User{

    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;
    }
    static registUser(id) {
        return new this(id, new Date());
    }

}

let user01 = User.registUser('user01');
console.log(user01);
