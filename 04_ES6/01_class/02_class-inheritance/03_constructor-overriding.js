
/* ...arg, ...args : 
뭐가 없을때 뭐가 자동으로 일어남 1156 */



// class Tiger extends Animal {
//     constructor(...arg) {
//         super(...args);
//     }
// }



class Animal {

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
}

/* 기본 생성자에 this.가 아니라 super.를 사용해서 받아줘야 한다.  */

class Deer extends Animal {

    constructor(name, weight, legLength) {
        super(name, weight);
        this.legLength = legLength;
    }

    hide(place) {
        console.log(`${this.name}은 ${place}에 숨습니다.`);
    }

}

let deer = new Deer ('슬픈 눈망울의 사슴', 40, 1);
deer.hide('동굴 안');
