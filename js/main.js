"use strict";
///////////////////////////////////////////////  Start get  DigClock  var  ////////////////////////////////////////

let houers = document.getElementById('houers');
let minuate = document.getElementById('min');
let second = document.getElementById('scon');
let today = document.getElementById('today');
let getDate = new Date()
    ///////////////////////////////////////////////  End  Start get  DigClock  var   ////////////////////////////////////////

///////////////////////////////////////////////  Start  get current Day function   ////////////////////////////////////////

function getCurrentDay() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday']
    today.innerHTML = `today is ${days[getDate.getDay()]}`
}
getCurrentDay()
    ///////////////////////////////////////////////  End get current Day function   ////////////////////////////////////////

///////////////////////////////////////////////  Start get current Clock function   ////////////////////////////////////////

function getCurrentTimes() {
    let getDate = new Date()
    houers.innerHTML = `${getDate.getHours()}`
    minuate.innerHTML = `${getDate.getMinutes()}`
    second.innerHTML = `${getDate.getSeconds()}`
    setTimeout(getCurrentTimes, 1000);
}
getCurrentTimes();
///////////////////////////////////////////////  End get current Clock function   ////////////////////////////////////////

/////////////////////////////////////////////// Start  D-none nav links function   ////////////////////////////////////////
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});
/////////////////////////////////////////////// End   D-none nav links function    ////////////////////////////////////////