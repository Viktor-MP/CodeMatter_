
import {
    create_faq,
    creatingListOfTargets,
} from '../global/global.js'
import {
    posts_conf,
    pageNavigation,
} from '../global/conf.js'

import { mailRegistration } from '../component/mailTemplate.js/mailTemp.js'

const mailContainer = document.querySelector('.curses')
const boxContent = document.querySelector('.boxContent')

const footerWebsite = document.querySelector('.footer_website')

let question = true
let inputContent

const curse_map = document.querySelector('.curs-map')
const create_curse_map = (maps) => {
    console.log(maps)
    maps.map((month) => {
        let curs_info = document.createElement('div')
        let content_theme_dark = document.createElement('div')
        let content_header = document.createElement('div')
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let nom = month.nom

        curs_info.className = `curs-info ${month.position}-section`
        content_theme_dark.className = `content-theme-${month.position}`
        content_header.className = "content-header"
        h2.innerText = month.name
        h3.className = "month"
        h3.innerText = month.month
        p.innerText = month.for

        content_header.append(h2, h3, p)
        nom.map((item) => {
            let month_h3 = document.createElement('h3')
            month_h3.innerText = item.header
            item.dots.map((dot) => {
                let month_p = document.createElement('p')
                month_p.innerText = dot
                month_h3.appendChild(month_p)
            })
            content_header.append(month_h3)
        })

        content_theme_dark.appendChild(content_header)
        curs_info.appendChild(content_theme_dark)
        curse_map.appendChild(curs_info)
    })
}

const create_more_info = () => {
    const url = new URLSearchParams(window.location.search)
    let post_id = url.get('id')
    let post = posts_conf[post_id - 1]

    let heading3 = document.createElement('h3');

    let sum_time = document.createElement('h4');
    let description = document.createElement('p');
    let anim_div = document.createElement('section')

    anim_div.className = 'anim_text'

    heading3.innerText = post.name

    inputContent = heading3.innerText
    sum_time.innerText = post.sum_time
    description.innerText = post.description

    sum_time.appendChild(description)
    fetch("../svg/education_animation.html").then((res) => res.text())
        .then((text) => {
            anim_div.innerHTML = text;
            anim_div.append(sum_time)
            console.log(anim_div)
        })
        .catch((e) => console.error(e));

    boxContent.append(heading3, anim_div)

    create_curse_map(post.curs_map)
    create_faq(post.faqs)
}
create_more_info()


creatingListOfTargets(pageNavigation, footerWebsite, 'en')
console.log(mailContainer)
mailContainer.appendChild(mailRegistration(question))
const input_curses = document.querySelector('#extra-info')
const defButton_type = document.querySelector('.typeReg').children[0]
input_curses.value = inputContent
defButton_type.addEventListener('click', () => input_curses.value = inputContent)

