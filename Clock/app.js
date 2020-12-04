// const hour = document.querySelector('.hours')
// const minutes = document.querySelector('.minutes')
// const seconds = document.querySelector('.seconds')


// function time(){

//     var date = new Date();
//     var hr = date.getHours()-12;
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
    
//     hour.textContent = hr ;
//     minutes.textContent = min ;
//     seconds.textContent = sec ;
// }

// setInterval(time,1000)


const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')



function showTime(){
    // Date
    const date = new Date();

    const hr= date.getHours();
    const min= date.getMinutes();
    const sec= date.getSeconds();

    
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec ;

}


setInterval(showTime ,1000)