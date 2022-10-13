const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeshop = document.querySelector('.coffeshop')
const buttonFireplace = document.querySelector('.fireplace')
const svgForest = document.querySelector('.forest .svg')
const svgRain = document.querySelector('.rain .svg')
const svgCoffeshop = document.querySelector('.coffeshop .svg')
const svgFireplace = document.querySelector('.fireplace .svg')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
const buttonPlay = document.querySelector('.play')
const buttonPlayFake = document.querySelector('.playFake')
const buttonStop = document.querySelector('.stop')
const buttonTimerUp = document.querySelector('.up')
const buttonTimerDown = document.querySelector('.down')
let timerTimeOut

const soundForest = new Audio('./sounds/floresta.wav')
const soundRain = new Audio('./sounds/chuva.wav')
const soundCoffeshop = new Audio('./sounds/cafeteria.wav')
const soundFireplace = new Audio('./sounds/lareira.wav')
const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

function resetControls() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')
    buttonPlay.classList.remove('hide')
    buttonPlayFake.classList.add('hide')

    soundForest.pause()
    soundRain.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

function resetTimer() {
    updateTimerDisplay(45, 0)
    clearTimeout(timerTimeOut)
}

/* CONTADOR REGRESSIMO */
function countdown() {
    timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
  
    updateTimerDisplay(45, 0)
  
    if (minutes <= 0 && seconds <= 0) {
        resetControls()
        kitchenTimer.play()
        return
    }

    if( seconds <= 0 ) {
        seconds = 2
        --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
}, 1000)
}


/* FUNCTION TOGGLE PARA CADA BOTÃO DE SOM */
let isForestPlaying
let isRainPlaying
let isCoffeshopPlaying 
let isFireplacePlaying 

function toggleForest() {
    if(isForestPlaying) {
        soundForest.pause()
    } else {
        soundForest.play()
        soundForest.loop = true
    }
}

function toggleRain() {
    if(isRainPlaying) {
        soundRain.pause()
    } else {
        soundRain.play()
        soundRain.loop = true
    }
}

function toggleCoffeshop() {
    if(isCoffeshopPlaying) {
        soundCoffeshop.pause()
    } else {
        soundCoffeshop.play()
        soundCoffeshop.loop = true
    }
}

function toggleFireplace() {
    if(isFireplacePlaying) {
        soundFireplace.pause()
    } else {
        soundFireplace.play()
        soundFireplace.loop = true
    }
}

/* IDENTIFICA SE O SOM ESTA TOCANDO */
soundForest.onplaying = function() {
    isForestPlaying = true
  }
soundForest.onpause = function() {
    isForestPlaying = false
}

soundRain.onplaying = function() {
    isRainPlaying = true
  }
soundRain.onpause = function() {
    isRainPlaying = false
}

soundCoffeshop.onplaying = function() {
    isCoffeshopPlaying = true
  }
soundCoffeshop.onpause = function() {
    isCoffeshopPlaying = false
}

soundFireplace.onplaying = function() {
    isFireplacePlaying = true
  }
soundFireplace.onpause = function() {
    isFireplacePlaying = false
}

    /* EVENTOS DO PLAYER */
buttonPlay.addEventListener('click', function() {
    countdown()
    buttonPlay.classList.add('hide')
    buttonPlayFake.classList.remove('hide')
})
    
buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
})

buttonTimerUp.addEventListener('click', function() {
    let newMinutes = minutes + 5
    if(!newMinutes) {
        minutes + 5
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})

buttonTimerDown.addEventListener('click', function() {
    let newMinutes = minutes -5
    if(!newMinutes) {
        minutes - 5
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})
    
    /* EVENTOS DO PAINEL DIREITO */
buttonForest.addEventListener('click', function() {
    buttonForest.classList.toggle('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.toggle('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')

    toggleForest()
    soundRain.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
})

buttonRain.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.toggle('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.toggle('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')
    
    toggleRain()
    soundForest.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
})

buttonCoffeshop.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.toggle('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.toggle('white')
    svgFireplace.classList.remove('white')

    toggleCoffeshop()
    soundForest.pause()
    soundRain.pause()
    soundFireplace.pause()
})

buttonFireplace.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.toggle('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.toggle('white')

    toggleFireplace()
    soundForest.pause()
    soundRain.pause()
    soundCoffeshop.pause()
})