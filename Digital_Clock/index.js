function updateclock(){
    const curr=new Date();
    let hr=curr.getHours().toString().padStart(2,'0');
    let min=curr.getMinutes().toString().padStart(2,'0');
    let sec=curr.getSeconds().toString().padStart(2,'0');
    hrbox=document.querySelector('.hr-box');
    minbox=document.querySelector('.min-box');
    secbox=document.querySelector('.sec-box');
    hrbox.textContent=hr;
    minbox.textContent=min;
    secbox.textContent=sec;

}
setInterval(updateclock,1000);
updateclock();