var date =document.querySelector('.date');
var time = document.querySelector('#currentTime');


function datetime(){
    let today = new Date();
    let options = { month: 'long', day: 'numeric', year: 'numeric'};
        date.innerText  = today.toLocaleDateString("en-US", options);
        time.innerText = today.getHours() + ":" + today.getMinutes();
}
datetime();

