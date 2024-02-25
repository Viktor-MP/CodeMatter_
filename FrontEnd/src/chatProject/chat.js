import { socket_chanal } from "./socket.js"
const soruse = './gpt.json'
const personalMap = document.querySelector('#personalMap')
const personalChat = document.querySelector('#personalChat')
const resizer = document.querySelector('.resizer') 
const chatStart_btn = document.querySelector('.startChat_btn')
const windowWidth = window.innerWidth

const getPersent = (eny) => {
    return windowWidth * eny / 100
}

const getMiMa = {
    min: 25,
    max: 45,
}


// ====================therd way of dragging ====================================


// Select the resizers

// const bottom = document.querySelector("#resizable .resizer-bottom");

//sides "t" (top),"r" (right),"b" (bottom),"l" (left)

function setUpEvent(resizer, resizableChat, xOrY = "x") {

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



fetch(soruse)
.then(res => res.json())
.then(data => chatGptData(data))


socket_chanal('wss://codematter.am:8080/websocket')
