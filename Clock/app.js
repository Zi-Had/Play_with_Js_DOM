const hour = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


function time(){

    var date = new Date();
    var hr = date.getHours()-12;
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    hour.textContent = hr ;
    minutes.textContent = min ;
    seconds.textContent = sec ;
}

setInterval(time,1000)