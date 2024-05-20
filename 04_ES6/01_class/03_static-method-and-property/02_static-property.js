
class Animal {

    static planet = "지구";


    constructor(name, weight) {
        this.name = name;
        this.weight = weight;   
    }

    eat(foodweight) {
        this.weight += foodweight;
        console.log(` ${this.name}(은)는 ${foodweight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }

    static compare(animanlA, animalB) {
        return animanlA.weight - animalB.weight;

    }
}

class Human extends Animal {

    develop(language) {
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다.`);
    }
}

/* static을 사용한 선언은 기술적으로는 클래스 자체에 직접 할당하는 것과 동일하다. */
Animal.staticProperty = 'static을 사용한 선언은 기술적으로는 클래스 자체에 직접 할당하는 것과 동일하다.'

let humans = [
    new Human("홍길동", 70),
    new Human("선덕여왕", 50),
    new Human("신사임당", 60)
];

humans.sort(Human.compare);

humans[0].develop('JavaScript');

/* 정적인 프로퍼티 실험 */
console.log(Human.planet);
console.log(Human.staticProperty);