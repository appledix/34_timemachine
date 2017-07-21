var TIMEOUT_IN_SECS = 3 * 60
var ALERTS_INTERVAL_IN_SECS = 30

var quotes = ["Choose a job you love, and you will never have to work a day in your life.",
              "Know your limits, but never stop trying to exceed them.",
              "Motivation without mobilization means only frustration.",
              "Every accomplishment starts with the decision to try. ",
              "He is able who thinks he is able.",
              "Those who believe they can do something and those who believe they can't are both right.",
              "Make each day your masterpiece."]

var timer = document.createElement('h1')
timer.style.textAlign = 'center'
timer.style.color = '#1E90FF'
timer.style.width = '100px'
timer.style.margin = '10px 10px'
timer.style.padding = '5px'
timer.style.backgroundColor = '#FFFFFF'
timer.style.border = '1px solid #BDBDBD'
timer.style.borderRadius = '3px'
timer.innerHTML = '<span id="timer-minutes">00</span>:<span id="timer-seconds">00</span>'

var timerContainer = document.createElement('div')
timerContainer.style.height = '55px'
timerContainer.style.position = 'fixed'
timerContainer.style.top = '0';
timerContainer.style.zIndex = '1000';
timerContainer.style.width = '100%';
timerContainer.style.backgroundColor = '#F5EFFB';
timerContainer.style.borderBottom = '1px solid #BDBDBD';

var bodyTag = document.body
bodyTag.style.paddingTop = "55px"
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.appendChild(timer) 

function getTimestampInSecs() {
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number) {
  return ("00" + String(number)).slice(-2)
}

var timestampOnStart = getTimestampInSecs()

function displayTimer() {
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60)
  var seconds = secsLeft - minutes * 60

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}

function showQuote() {
  alert(quotes[~~(Math.random()*quotes.length)])
}

setInterval(displayTimer, 1000)

setTimeout(function() {
  showQuote()
  setInterval(showQuote, ALERTS_INTERVAL_IN_SECS * 1000)
}, (TIMEOUT_IN_SECS + 1) * 1000)