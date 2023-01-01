'use strict'

/* // similar function like - addEventListener

function myAddEventListener(typeOfEvent, callbackFunction){
    // sss
    var event = {
        eventType: 'click',
        key:        'p',
        durationOfKeypress: 2
    }
    if(event.eventType === typeOfEvent){
        callbackFunction(event)}
}

debugger
myAddEventListener('click', function(e){
    console.log(e)
})
*/





// playing sound for clicking keys on screen
let drumNumbers = document.getElementsByClassName('drum').length

for(var i=0; i<drumNumbers; i++)
    document.getElementsByClassName('drum')[i].addEventListener('click', function(){
        // console.log (seeEvent)
        var letter
        console.log(letter = this.innerHTML)
        playSound(letter)     
    })


// playing sound for typing from keyboard
document.addEventListener('keydown', function(event){
    playSound(event.key)
})


function playSound(letter){

    // let sound = new Audio('sounds/tom-1.mp3')
    // sound.play()
    // console.log(this)
    // console.log(this.innerHTML)
    // this.classList.add('white')
    // this.style.color='#fff'

    /* // Audio = JS built-in Constructor function

    function Audio (audioFile) {
        this.audioFile = audioFile
        this.play = function(){
            // statement
            // statement
        }
    }*/


    // let letter = this.innerHTML
    
    switch(letter){
        case 'w':
            var sound = new Audio('sounds/tom-1.mp3')
            sound.play()
            break
        case 'a':
            sound = new Audio('sounds/tom-2.mp3')
            sound.play()
            break
        case 's':
            sound = new Audio('sounds/tom-3.mp3')
            sound.play()
            break
        case 'd':
            sound = new Audio('sounds/tom-4.mp3')
            sound.play()
            break
        case 'j':
            sound = new Audio('sounds/snare.mp3')
            sound.play()
            break
        case 'k':
            sound = new Audio('sounds/kick-bass.mp3')
            sound.play()
            break
        case 'l':
            sound = new Audio('sounds/crash.mp3')
            sound.play()
            
    }    
}   



/*
document.getElementsByClassName('drum')[0].addEventListener('click', function(){alert('hi Moin '+0)})
document.getElementsByClassName('drum')[1].addEventListener('click', function(){alert('hi Moin '+1)})
document.getElementsByClassName('drum')[2].addEventListener('click', function(){alert('hi Moin '+2)})
document.getElementsByClassName('drum')[3].addEventListener('click', function(){alert('hi Moin '+3)})
document.getElementsByClassName('drum')[4].addEventListener('click', function(){alert('hi Moin '+4)})
document.getElementsByClassName('drum')[5].addEventListener('click', function(){alert('hi Moin '+5)})
document.getElementsByClassName('drum')[6].addEventListener('click', function(){alert('hi Moin '+6)})
*/