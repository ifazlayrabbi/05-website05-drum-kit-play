'use strict'

let bellBoy1 = {
    name: 'Timmy',
    age: 18,
    hasWorkPermit: true,
    languages: ['French', 'English'],
    moveSuitcase: function(){
        console.log("May I take your suitcase?")
        pickUpSuitcase()
        move()
    }
}
console.log(bellBoy1.age)

let bellBoy2 = {
    name: 'Jimmy',
    age: 24,
    hasWorkPermit: true,
    languages: ['Italian', 'English']
}

// Audio = JS built-in constructor function

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
    this.clean = function(){
        console.log('Cleaning in progress...')        
    }
}
let bellBoy3 = new BellBoy('Himmy', 20, true, ['Bangla', 'English'])
bellBoy3.clean()

console.log('Hello, my name is ' + bellBoy3.name)
