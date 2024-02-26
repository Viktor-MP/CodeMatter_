import { socket_chanal } from "./socket.js"
import setUpEvent from "./resizer/resizer.js"

const soruse = './sourses/gpt.json'
const chatSourse = './sourses/testChat.json'
const personalMap = document.querySelector('#personalMap')
const personalChat = document.querySelector('#personalChat')
const resizer = document.querySelector('.resizer') 
const chatStart_btn = document.querySelector('.startChat_btn')




// ======================================================================

const getKeysData = (obj) => {
    const keysObj = Object.keys(obj)
    return keysObj
}

const chatGptData = (data) => {
    const mapContainer = document.createElement('div')
    mapContainer.className = 'mapContainer'
    const mapGide = document.createElement('div')
    mapGide.innerHTML = `
    <h2>Personal education map</h2>
    `
    mapGide.className = 'mapGide'

    for (let key in data) {
        let gide = document.createElement('div')
        gide.className = 'gideLevel'
        let heading = document.createElement('h3')
        heading.innerText = key
        gide.append(heading)    

        for (let keys in data[key]) {
            let par = document.createElement('p')
            par.innerText = keys
            gide.appendChild(par)
        }
        mapGide.appendChild(gide)
        

    }
    for (let key in data) {
        let gide = document.createElement('div')
        gide.className = 'gideLevel'
        let heading = document.createElement('h3')
        heading.innerText = key
        gide.append(heading)    

        for (let keys in data[key]) {
            let par = document.createElement('p')
            par.innerText = keys
            gide.appendChild(par)
        }
  
        mapGide.appendChild(gide)
        

    }
    mapContainer.appendChild(mapGide)
    personalMap.insertAdjacentElement("afterbegin", mapContainer)

}


chatStart_btn.addEventListener("click", (e) => {
    let type = e.currentTarget.type
    if (type !== 'text') {
        e.currentTarget.value = ''
        e.currentTarget.type = 'text'
    }
})

chatStart_btn.addEventListener('submit', () => console.log('hello'))



fetch(soruse)
.then(res => res.json())
.then(data => chatGptData(data))


// fetch(chatSourse)
// .then(res => res.json())
// .then(data => console.log(data))


setUpEvent(resizer, personalChat, "x");



socket_chanal('wss://codematter.am:443/websocket')





// const images = document.querySelectorAll("img");
// const containers = document.querySelectorAll(".container");

// images.forEach((image) => {
//   image.addEventListener("dragstart", dragStart);
//   image.addEventListener("dragend", dragEnd);
// });

// containers.forEach((container) => {
//   container.addEventListener("dragover", dragOver);
//   container.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("draggedImageId", event.target.id);
//   setTimeout(() => event.target.classList.toggle("hidden"));
// }

// function dragEnd(event) {
//   event.target.classList.toggle("hidden");
// }

// function dragOver(event) {
//   event.preventDefault();
// }

// Element.prototype.insertChildAtIndex = function(child, index) {
//     if (!index) index = 0
//     console.log(this.children.length)
//     if (index >= this.children.length) {
//       this.appendChild(child)
//     } else {
//       this.insertBefore(child, this.children[index])
//       for (let i = index; i < this.children.length; i++) {
//         console.log(this.children[i])
//         console.dir(child.parentElement.children)
//         this.insertBefore(child.parentElement.children[i-1], this.children[i+1])


//       }
//     }
//   }

// function drop(event) {
//   const draggedImageId = event.dataTransfer.getData("draggedImageId");
//   const draggedImage = document.getElementById(draggedImageId);
//    console.log(draggedImage)
//   const fromContainer = draggedImage.parentNode;
//   const toContainer = event.currentTarget;
//   console.log(toContainer.firstElementChild)
// //   parent.insertChildAtIndex(child, 2)
//   if (toContainer == fromContainer) {
//     console.log('hello')
//     fromContainer.appendChild(toContainer.firstElementChild);
    
//     // toContainer.appendChild(draggedImage);
//     toContainer.insertChildAtIndex(draggedImage, 0)
//   }
// }