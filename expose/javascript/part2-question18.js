// setInterval(printTime(), 1000);
let d;
let timerId = setInterval(function() {
    d = new Date();
    console.log(d.toLocaleTimeString());
}, 1000);