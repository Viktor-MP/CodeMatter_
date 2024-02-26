const soruse = './gpt.json'
const personalMap = document.querySelector('#personalMap')
console.log(personalMap)
const personalChat = document.querySelector('#personalChat')
const chatStart_btn = document.querySelector('.startChat_btn')
let mousState = false
import { socket_chanal } from "./socket.js"



// let p = document.querySelector('p'); // element to make resizable

// personalMap.addEventListener('click', function init() {
//     personalMap.removeEventListener('click', init, false);
//     personalMap.className = personalMap.className + ' resizable';
//     let resizer = document.createElement('div');
//     resizer.className = 'resizer';
//     personalMap.appendChild(resizer);
//     resizer.addEventListener('mousedown', initDrag, false);
// }, false);

let startX, startY, startWidth, startHeight, clientEX ;



// personalMap.addEventListener('mousedown', function (e) {
//     // Record the initial mouse position
//     const initialX = e.clientX;
//     // Function to handle mousemove event
//     function handleMouseMove(event) {
//         // Calculate the difference in mouse position
//         const deltaX = event.clientX - initialX;
        
//         console.log('down')
//         // Adjust the element's width based on the mouse movement
//         personalMap.style.width = `${100 + deltaX}px`;
//     }

//     // Function to handle mouseup event
//     function handleMouseUp() {
//         // Remove the event listeners when the mouse is released
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//     }

//     // Attach event listeners for mousemove and mouseup
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
// });

// const changeMouseState = (state) => {
//     console.log(state)
//     mousState = state
// }

// document.documentElement.addEventListener('mousedown', () => changeMouseState(true))
// document.documentElement.addEventListener('mouseup', () => changeMouseState(false))




const doDrag = (e) => {
    console.log(e)
    if (mousState) {


        personalMap.style.width = (startWidth + e.clientX - startX) + 'px';
        // personalMap.style.height = (startHeight + e.clientY - startY) + 'px';
        console.log(e.clientX)
        if (e.clientX > clientEX) {
            stopDrag()
        }
        clientEX = e.clientX
    }

    document.removeEventListener('mousemove', doDrag, false);
    document.removeEventListener('mouseup', stopDrag, false);

}
const stopDrag = (e) => {
    document.removeEventListener('mousemove', doDrag, false);
    document.removeEventListener('mouseup', stopDrag, false);
}

const initDrag = (e) => {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(personalMap).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(personalMap).height, 10);
   document.addEventListener('mousemove', doDrag, true);
   document.addEventListener('mouseup', stopDrag, false);
}



const resize_PersonalMap_hendler = (element) => {
    console.log(element)

console.log(mousState)
    element.addEventListener("mouseover", (e) => {
        let clientWidth = e.currentTarget.offsetWidth
        if (e.x >= clientWidth-10 && e.x <= clientWidth) {
            console.log(true)
            e.currentTarget.style.cursor = "w-resize"
            initDrag(e)
        }else {
            e.currentTarget.style.cursor = "auto"
            // e.currentTarget.removeEventListener("mousemove", mousMoveDrage);
        }
    })

}
resize_PersonalMap_hendler(personalMap)

const getKeysData = (obj) => {
    const keysObj = Object.keys(obj)
    return keysObj
}

const chatGptData = (data) => {
    const mapGide = document.createElement('div')
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
    personalMap.appendChild(mapGide)

}


chatStart_btn.addEventListener("click", (e) => {

    let type = e.currentTarget.type
    if (type !== 'text') {
        e.currentTarget.value = ''
        e.currentTarget.type = 'text'
    }

})



// fetch(soruse)
// .then(res => res.json())
// .then(data => chatGptData(data))

socket_chanal('wss://codematter.am:443/websocket')
