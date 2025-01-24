async function clock(){
    let display = document.querySelector("#hero")
let time = new Date();

let hr = time.getHours()
let mn = time.getMinutes()
let sc = time.getSeconds()
let session = 'AM';

if(hr > 12){
    session = 'PM'
    hr = hr-12;
}


let current_time = `${hr} : ${mn} : ${sc} ${session}`
    display.innerHTML = current_time;
    setTimeout(clock,1000)
}
clock()

