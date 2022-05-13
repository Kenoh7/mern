class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
    attack(target){
        return console.log(this.name + " attacked " + target.name);
    }

}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
    super(name, cost)

    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.magnitude
        }
        else{
            throw new Error("no")
        }
    }
}



const red = new Unit("Red Belt Ninja", 3,3,4)
const black = new Unit("Black Belt Ninja", 4,5,4)

const HardAlgo = new Effect("Hard Algorithm", 2,"increase target's resilience by 3", "resilience",+3)
const Unhandled = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2", "resilience", -2)
const Pair = new Effect("Pair Programming",3,"reduce target's resilience by 2", "power", +2)


// 1
console.log(red)
// 2
HardAlgo.play(red)
// 3
console.log(black)
// 4
Unhandled.play(red)
// 5
Pair.play(red)
// 6
red.attack(black)
