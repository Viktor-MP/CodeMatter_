const soruse = './gpt.json'
const personalMap = document.querySelector('#personalMap')
const personalChat = document.querySelector('#personalChat')
const chatStart_btn = document.querySelector('.startChat_btn')
console.log(chatStart_btn)

const mousMoveDrage = (e) => {
    console.log(e)
}

const initDrag = (e) => {
    startX = e.clientX;
    startY = e.clientY;
    console.log(startX, startY)
    console.log(e.currentTarget)
    e.currentTarget.addEventListener('mousedown', (e) => {
        console.log(e)
        e.currentTarget.addEventListener('mousemove', mousMoveDrage)
    })
   


 }

const resize_PersonalMap_hendler = (element) => {
    // console.dir(element)
    element.addEventListener("mouseover", (e) => {
        let clientWidth = e.currentTarget.offsetWidth
        // console.log(clientWidth, e)
        if (e.x >= clientWidth-10 && e.x <= clientWidth) {
            console.log(true)
            e.currentTarget.style.cursor = "w-resize"
            initDrag(e)

        }else {
            e.currentTarget.style.cursor = "auto"
            e.currentTarget.removeEventListener("mousemove", mousMoveDrage);

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

    for (key in data) {
        // console.log(key, data[key])
        let gide = document.createElement('div')
        gide.className = 'gideLevel'
        let heading = document.createElement('h3')
        heading.innerText = key
        gide.append(heading)    

        for (keys in data[key]) {
            let par = document.createElement('p')
            par.innerText = keys
            gide.appendChild(par)
        }
        
        mapGide.appendChild(gide)
        

    }
    for (key in data) {
        // console.log(key, data[key])
        let gide = document.createElement('div')
        gide.className = 'gideLevel'
        let heading = document.createElement('h3')
        heading.innerText = key
        gide.append(heading)    

        for (keys in data[key]) {
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

fetch(soruse)
.then(res => res.json())
.then(data => chatGptData(data))

