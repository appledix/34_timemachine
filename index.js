var TIMEOUT_IN_SECS = 3 * 60
var TEMPLATE = '<h1 style="text-align:center; color:#1E90FF; width:100px; margin: 10px 10px; padding:5px; background-color:#FFFFFF; border:1px solid #BDBDBD; border-radius:3px;"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var quotes = ["Choose a job you love, and you will never have to work a day in your life.",
      			  "Know your limits, but never stop trying to exceed them.",
      			  "Motivation without mobilization means only frustration.",
      			  "Every accomplishment starts with the decision to try. ",
      			  "He is able who thinks he is able.",
      			  "Those who believe they can do something and those who believe they can't are both right.",
      			  "Make each day your masterpiece."]

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "position:fixed; top:0; z-index:1000; width:100%; height: 55px; background-color:#F5EFFB; border-bottom:1px solid #BDBDBD;")
var bodyTag = document.body
bodyTag.style.paddingTop = "55px"
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

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
	setInterval(showQuote, 30000)
}, 181000)