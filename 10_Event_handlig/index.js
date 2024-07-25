const chBtn= document.getElementById("change")
const chPara= document.getElementById("change-para")
const chInput = document.getElementById("keyinput")
const chEvent = document.getElementById("keyevent")
const sbtBtn = document.getElementById("sbt-btn")
const defaultForm = document.getElementById("default")
const selectEle = document.getElementById('options')
const selectLang = document.getElementById('select-item')

chBtn.addEventListener('click',()=>{
    chPara.innerText=`The tax rates have been adjusted. Previously, there was no tax on income up to ₹3 lakhs, 
    5% on income between ₹3 lakhs and ₹6 lakhs, 10% on income between ₹6 lakhs and ₹9 lakhs and 15% on income 
    between ₹9 lakhs and ₹12 lakhs. Now, the 5% rate applies to income between ₹3 lakhs and ₹7 lakhs, the 10% 
    rate covers ₹7 lakhs to ₹10 lakhs and the 15% rate starts at ₹10 lakhs and goes up to ₹12 lakhs. The rest 
    remains the same.`
})

chBtn.addEventListener('dblclick',()=>{
       const reImg = document.getElementById("react-img")
       if(reImg.style.display=="none"){
          reImg.style.display='block'
       }else{
          reImg.style.display = 'none'
       }
})

chBtn.addEventListener('mouseover',()=>{
   chPara.style.backgroundColor='red'
})

chBtn.addEventListener('mouseout',()=>{
   chPara.style.backgroundColor='#ffffff'
})

chInput.addEventListener('keydown',(e)=>{
   chEvent.innerText +=`${e.code}`
})

chInput.addEventListener('keyup',(e)=>{
   chEvent.innerText +=`${e.code}`
})

defaultForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   //you can see console values in right click inspect elemnt on live server
   console.log(document.getElementById('fname').value)
   console.log(document.getElementById('lname').value)
})

selectEle.addEventListener('change',(e)=>{
     selectLang.innerText =`selected language is  ${e.target.value}`
})