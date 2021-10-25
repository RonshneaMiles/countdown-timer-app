/*
    1. Find ending date. (New Years Day, 01/01/2022)
    2. Get current date.
        1. Define the dates with new Date() function.
    3. Subtract the current date from the ending date.
    4. 
        1. Use getTime() function, this converts them into number values

*/

const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

const newYears = "01/01/2022"

function countdown () {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()


    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.ceil(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    
   daysElement.innerHTML = getTraditionalTime (days)
   hoursElement.innerHTML = getTraditionalTime (hours)
   minutesElement.innerHTML = getTraditionalTime (minutes)
   secondsElement.innerHTML = getTraditionalTime (seconds)
}

function getTraditionalTime (time) {
    if(time < 10) {
        return `0${time}`
    }
    else {
        return time
    }
}

// countdown()

setInterval(countdown, 1000)