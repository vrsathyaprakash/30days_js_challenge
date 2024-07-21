//selecting an element by its id
document.getElementById('title').innerText="Java script challemge DAY 9"
document.querySelector(".content").innerText= `Challenge about dom manipulation includes changing content
 by selecting id and class inside html`

 document.querySelector('.content').style.backgroundColor="#C0C0C0"

 const newdev = document.createElement('div')
 const text=document.createTextNode("new div elemnt inside  a body element")
 newdev.appendChild(text)
 document.body.append(newdev)