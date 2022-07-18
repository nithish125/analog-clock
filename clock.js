setInterval( setclock,1000)
const horhand=document.querySelector("[data-hor-hand]")
const mniehand=document.querySelector("[data-mnite-hand]")
const secondhand=document.querySelector("[data-second-hand]")
function setclock(){
    const currentdate=new Date()
   const secondRatio=currentdate.getSeconds()/60
   const miniteRatio=(secondRatio+ currentdate.getMinutes())/60
   hourRatio=(miniteRatio+ currentdate.getHours())/12
   
    setrotation(secondhand,secondRatio)
    setrotation(mniehand,miniteRatio)
    setrotation( horhand,hourRatio)
    //horhand.style.setProperty('--rotation',hourRatio*360)
    //.style.setProperty('--rotation',hourRatio*360)
}
 function setrotation(element,rotationRatio){
//   element.style.setProperty('--rotation',rotationRatio*360)
element.style.setProperty('--rotation',rotationRatio*360)
 }
setclock()