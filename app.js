const currentTime = () =>{

    //define our clock row date
    let date =  new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let session = 'AM';

    //checking if AM or PM
    if(hours === 0){
        hours = 12;
    }else if(hours > 12){
        hours = hours -12;
        session = 'PM'
    }

    //checking hours min sec
    hours = (hours < 10 ) ? '0' + hours : hours;
    min = (min < 10 ) ? '0' + min : min;
    second = (second < 10 ) ? '0' + second : second;

    //format our clock
    let time = `${hours} : ${min} : ${second} ${session}`;

    document.querySelector('h1').innerHTML = time;
    let tiktik = setTimeout(() => {currentTime()}, 1000)
} 

currentTime();