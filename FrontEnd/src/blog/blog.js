import {
    creatingListOfTargets,
} from '../global/global.js'
import {
    pageNavigation
} from '../global/conf.js'

const more_buttons = Array.from(document.querySelectorAll('.filter_more'))
let more_on_tags = false
const footerWebsite = document.querySelector('.footer_website')


const formHeightHendler = (e, newState, newClass) => {
    let elClassList = e.currentTarget.children[0].classList
    let parClassList = e.currentTarget.parentElement.classList
    e.currentTarget.dataset.state = newState
    parClassList.remove(parClassList[parClassList.length - 1])
    parClassList.add(`par_${newClass}`)
    elClassList.remove(elClassList[elClassList.length - 1])
    elClassList.add(newClass)
}

more_buttons.map(more_button => {
    
    more_button.setAttribute('data-state', "false");
    more_button.addEventListener('click',  (e) => {
       
        e.currentTarget.dataset.state === 'true'? 
        formHeightHendler(e,'false','right'):
        formHeightHendler(e,'true', 'down')

    })
})


creatingListOfTargets(pageNavigation, footerWebsite, 'en')
