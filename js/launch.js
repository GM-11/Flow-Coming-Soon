
let coundownDate=new Date("Mar 25, 2025 00:00:00").getTime();
let timer=setInterval(() => {
    let todaysDate=new Date().getTime()
    let differenceInDate=coundownDate-todaysDate;
    const day = Math.floor(differenceInDate / (1000 * 60 * 60 * 24));
    const hour = Math.floor((differenceInDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute= Math.floor((differenceInDate % (1000 * 60 * 60)) / (1000 * 60));
    const second= Math.floor((differenceInDate % (1000 * 60)) / 1000);
    let days=document.querySelector(".days");
    let hours=document.querySelector(".hours");
    let minutes=document.querySelector(".minutes");
    let seconds=document.querySelector(".seconds");
    days.innerHTML=`${day}<span style="background-color: #C00000; border:1px solid #C00000; ">Days</span>`
    hours.innerHTML=`${hour}<span>H</span>`
    minutes.innerHTML=`${minute}<span>M</span> `
    seconds.innerHTML=`${second}<span>S</span> `

    if(differenceInDate<0){
        clearInterval(timer);
        days.innerHTML="0 Days"
        hours.innerHTML="0 H"
        minutes.innerHTML="0 M"
        seconds.innerHTML="0 S"
    }
}, 1000);

let form=document.querySelector("#mc-form");
let input=document.querySelector("#mc-email")
function sendingEmail(){
    let params={
        email:document.querySelector(".email").value
    }
    emailjs.send("service_m7buze8",'template_mq85usl',params)
    console.log("Send")
}
form.addEventListener("submit",function sendEmail(e){
    e.preventDefault();
    console.log(input.value)
    input.value=""
})