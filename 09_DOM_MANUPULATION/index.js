//selecting an element by its id
document.getElementById('title').innerText="Java script challemge DAY 9"
document.querySelector(".content").innerText= `Challenge about dom manipulation includes changing content
 by selecting id and class inside html`

 document.querySelector('.content').style.backgroundColor="#C0C0C0"

 //ceate a new div element
 const newdev = document.createElement('div')
 newdev.id='new-ele'
 const text=document.createTextNode("new div elemnt inside  a body element")
 newdev.appendChild(text)
 document.body.append(newdev)


 //create a new li element and aapend  it to the existing ui element
 const newLi = document.createElement('li')
 const context = document.createTextNode("REACT")
 newLi.appendChild(context)
 document.getElementById('lists').appendChild(newLi)


 //to deleate a element from document
const reELe = document.getElementById('con')
reELe.remove()

//to remove last child of html-ul elemnt
const list=document.getElementById('lists')
list.lastElementChild.remove()

//to change the attribute of an html element
const image=document.getElementById('react-icon')
image.src= "react.png"

//to add and remove class element
list.classList.add('bkg')
list.classList.remove('bkg')

//add event listener to a button
const newEle=document.getElementById('new-ele')
const chBtn= document.getElementById('change')
chBtn.addEventListener('click',()=>{
       newEle.innerText="content changes when button is clicked"
})

chBtn.addEventListener('mouseover',()=>{
    chBtn.style.borderWidth='5px'
    chBtn.style.borderColor='blue'
})
