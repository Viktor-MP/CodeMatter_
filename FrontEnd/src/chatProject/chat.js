<<<<<<< HEAD
import { socket_chanal } from "./socket.js"
const sourse = './gptTest.json'
=======
import socket_chanal  from "./socket.js"
import setUpEvent from "./resizer/resizer.js"

const soruse = './sourses/gpt.json'
const chatSourse = './sourses/testChat.json'
>>>>>>> 8877f7a65925aaba07a5a3329dee877955f640dc
const personalMap = document.querySelector('#personalMap')
const personalChat = document.querySelector('#personalChat')
const resizer = document.querySelector('.resizer') 
const chatStart_btn = document.querySelector('.startChat_btn')
<<<<<<< HEAD
const button_submit = document.querySelector(".sendChatIcon")
const windowWidth = window.innerWidth

const getPersent = (eny) => {
    return windowWidth * eny / 100
}

const getMiMa = {
    min: 25,
    max: 45,
}
=======
>>>>>>> 8877f7a65925aaba07a5a3329dee877955f640dc




<<<<<<< HEAD
// Select the resizers

// const bottom = document.querySelector("#resizable .resizer-bottom");

//sides "t" (top),"r" (right),"b" (bottom),"l" (left)

function setUpEvent(resizer, resizableChat, xOrY = "x") {
    console.log(resizer)
  const isX = xOrY === "x";
  const parentElement = resizer.parentElement  
  // Define event handlers
  const mouseDownHandler = (e) => {
    // Store initial mouse position and width
    resizer.parentInitialPosition = { x: e.pageX, y: e.pageY };
    resizableChat.parentInitialPosition = { x: e.pageX, y: e.pageY };

    const rect = parentElement.getBoundingClientRect();
    const chatRect = resizableChat.getBoundingClientRect();

    resizer.parentInitialDimension = {
        w: parseInt(rect.width),
        h: parseInt(rect.height)
    };
    resizableChat.parentInitialDimension = {
        w: parseInt(chatRect.width),
        h: parseInt(chatRect.height)
    }

    // Attach move and out events
    resizer.addEventListener("mousemove", mouseMoveHandler);
    resizer.addEventListener("mouseout", mouseMoveHandler);

    // Detach down event to prevent accumulation
    resizer.removeEventListener("mousedown", mouseDownHandler);
  };

  const mouseUpHandler = (e) => {
    // Detach move and out events
    resizer.removeEventListener("mousemove", mouseMoveHandler);
    resizer.removeEventListener("mouseout", mouseMoveHandler);

    // Reattach down event
    resizer.addEventListener("mousedown", mouseDownHandler);
  };

  const mouseMoveHandler = (e) => {
    const nextPosition = { x: e.pageX, y: e.pageY };
    
    if (nextPosition.x < getPersent(getMiMa.min) || nextPosition.x > getPersent(getMiMa.max) ) return;
    
    if (isX) {
        const newWidthRes = resizableChat.parentInitialDimension.w - 
        (nextPosition.x - resizableChat.parentInitialPosition.x);

        const newWidth =
        resizer.parentInitialDimension.w +
        (nextPosition.x - resizer.parentInitialPosition.x);

        resizableChat.style.width = newWidthRes + "px"
        parentElement.style.width = newWidth + "px";
    } else {
      const newHeight =
        resizer.parentInitialDimension.h +
        (nextPosition.y - resizer.parentInitialPosition.y);
      parentElement.style.height = newHeight + "px";
    }
   
  };

  // Attach initial down event
  resizer.addEventListener("mousedown", mouseDownHandler);

  // Attach up event to window to cover the case where mouse button is released outside the resizer
  window.addEventListener("mouseup", mouseUpHandler);
}
setUpEvent(resizer, personalChat, "x");
// setUpEvent(bottom, "y");

=======
>>>>>>> 8877f7a65925aaba07a5a3329dee877955f640dc
// ======================================================================

const getKeysData = (obj) => {
    const keysObj = Object.keys(obj)
    return keysObj
}

const chatGptData = (data) => {
    const mapContainer = document.createElement('div')
    mapContainer.className = 'mapContainer'
    const mapGide = document.createElement('div')
    // mapGide.innerHTML = `
    // <h2>Personal education map</h2>
    // `
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
<<<<<<< HEAD
    socket_chanal(
{
"messages": [
                {
                    "role": "user",
                    "content": "բարև"
                }
            ]
})
=======
>>>>>>> 8877f7a65925aaba07a5a3329dee877955f640dc
    let type = e.currentTarget.type
    if (type !== 'text') {
        e.currentTarget.value = ''
        e.currentTarget.type = 'text'
    }
})

chatStart_btn.addEventListener('submit', () => console.log('hello'))


<<<<<<< HEAD
=======

fetch(soruse)
.then(res => res.json())
.then(data => chatGptData(data))
>>>>>>> 8877f7a65925aaba07a5a3329dee877955f640dc


button_submit.addEventListener('click',  () => console.log('hello'))
console.log(sourse)
fetch(sourse)
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
