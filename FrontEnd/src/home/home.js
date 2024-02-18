import {
    mailRegistration
} from "../component/mailTemplate.js/mailTemp.js"
// console.log(mailRegistration)

import {
    faqs_conf,
    events_conf,
    pluses_conf,
    posts_conf,
    teachers_conf,
    feedbacks_conf,
    pageNavigation,
    logos_conf
} from "../global/conf.js"

import {
    create_pluses,
    create_faq,
    observer,
    observHeading,
    progress_barObserver,
    // scrollX_Sport,
    creatingListOfTargets,
    create_company_logos
} from "../global/global.js";

const root = document.documentElement;
const get_event_content = document.querySelector('.event-content')
const mailContainer = document.querySelector('.curses')

const show_event = document.querySelector('.show-event')
const def_language = document.querySelector('.def_language')

const feedbacks = document.querySelector('.feedbacks')// scroll bar x
const heading = document.querySelector('.about_company')

const dotBox = document.createElement('div')
dotBox.className = 'dot-box'
const postBox = document.querySelector('.post-box')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let progress_bar
const teachers_section = document.querySelector('.trainers')

const box = document.createElement('div');

const closed_language = document.createElement('div')

const button = document.querySelector('.event-indicator')
const closed_event = document.querySelector('.closed-event')
const name_event = document.querySelector('.hover-underline-animation')

const choose_we = document.querySelector('.choose_we') // scroll bar x

const footerWebsite = document.querySelector('.footer_website')
closed_language.className = 'closed_language'

box.className = 'content_img';
let closedOpen = false
let defLeng = localStorage.getItem('leng') || 'En'

let curseCount = 0
let question = true
let inputContent
let dote_arr

let black_h2 = Array.from(document.querySelectorAll('.category-name'))

const create_feedback = (feeds) => {
    let div_feeds = document.createElement('div')
    div_feeds.className = 'scroll-bar'

    feeds.map((feed) => {
        let div_feed = document.createElement('div')
        div_feed.className = 'feed'

        let name = document.createElement('p')
        let text = document.createElement('p')

        name.className = 'feed-name'
        text.className = 'feed-text'

        name.innerText = feed.name
        text.innerText = feed.description

        div_feed.append(name, text)
        div_feeds.append(div_feed)
    })

    feedbacks.appendChild(div_feeds)
}

create_feedback(feedbacks_conf)


const create_events = (event) => {
    let isOnEvent = true
    const create_content = (post_type) => {
        get_event_content.innerHTML = ''
        name_event.innerText = event.name
        if (post_type === 'video') {
            let content = document.createElement('video')
            let so = document.createElement('source')
            content.className = 'event-content-img'
            content.autoplay = true
            content.muted = true
            content.loop = true
            so.src = event.video
            so.type = "video/mp4"
            content.append(so)
            get_event_content.append(content)
        } else if (post_type === 'image') {
            let content = document.createElement('img')
            content.className = 'event-content-img'
            content.src = event.img
            get_event_content.append(content)
        }

        closed_event.addEventListener('click', () => {
            show_event.style.display = 'none'
            isOnEvent = true
        })
        show_event.style.display = 'block'
    }

    const not_content = () => {
        let notContentText = document.querySelector('.show-not-news')
        notContentText.style.display = 'block'

        setTimeout(() => {
            notContentText.style.display = 'none'
            isOnEvent = true
        }, 5000)
    }

    if (event.is_open === true) {
        isOnEvent = false
        create_content(event.post_type)
    }

    button.addEventListener('click', () => {
        if (isOnEvent) {
            isOnEvent = false
            if (event.is_open === false) not_content()
            else create_events(event)
        }
    })
}


// if (isOnEvent) {
//     isOnEvent = false
//     button.removeEventListener('click', () => {
//         console.log('ssss')}
//     )
//     let p = document.querySelector('.show-not-news')
//     p.style.display = 'block'
//     if (event.is_open === true) {
//         create_content(event.post_type)
//     } else {
//         setTimeout(() => {
//             p.style.display = 'none'
//             isOnEvent = true
//         }, 5000)
//     }
// }

create_events(events_conf)
// const makingUnder_window_buttons = (arr) => {
//     arr.reverse().map(head => {
//         if (
//             head.offsetTop + head.scrollHeight + 2 > window.scrollY + window.innerHeight &&
//             head.style.width.slice(head.style.width.length - 2) !== 'px'
//         ) {
//             head.style.width = (head.lastChild.length * 13) + 'px'
//             head.style.marginLeft = margLeft - head.lastChild.length * 13 + 'px'
//             margLeft -= head.lastChild.length * 13
//         } else if (
//             head.offsetTop + head.scrollHeight + 2 < window.scrollY + window.innerHeight &&
//             head.style.width.slice(head.style.width.length - 2) == 'px'
//         ) {
//             head.style.marginLeft = 0
//             head.style.width = '100%'
//             margLeft += head.lastChild.length * 13
//         }
//     })
// }


// lenguages ========================
const imgContent = document.querySelector('.imgContent')

const setLenguages = (leng) => {
    if (leng === 'RU') {
        imgContent.innerHTML = `
            <h1>CODE MATTER</h1>
            <h2>ЗАЖИГАЕМ УМЫ, ФОРМИРУЕМ БУДУЩЕЕ!</h2>
            <p>Но я должен объяснить вам, как родилась вся эта ошибочная идея порицания удовольствия и восхваления боли.
            родилась, и я дам вам полный отчет об этой системе,
            и изложу фактическое учение великого исследователя истины,
            творца человеческого счастья. Никто не отвергает, не любит и не избегает удовольствия как такового,
            потому что это удовольствие, а потому что те, кто не умеет рационально стремиться к удовольствию, сталкиваются с последствиями, которые крайне болезненны.
            сталкиваются с крайне болезненными последствиями.
            Также нет никого, кто любил бы, преследовал или желал бы получить боль как таковую, потому что она
            это и есть боль,
            но потому, что время от времени возникают обстоятельства, при которых труд и боль могут доставить ему большое удовольствие.
            удовольствие. Возьмем банальный пример,
            Кто из нас когда-либо прибегал к трудоемким физическим упражнениям, кроме как для того, чтобы получить от них какую-то выгоду?
            от него?
        `
    } else if (leng === 'EN') {
        imgContent.innerHTML = `
        <h1>CODE MATTER</h1>
        <h2>IGNITING MINDS, SHAPING FUTURES!</h2>
        <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system,
            and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful.
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it
            is pain,
            but because occasionally circumstances occur in which toil and pain can procure him some great
            pleasure. To take a trivial example,
            which of us ever undertakes laborious physical exercise, except to obtain some advantage from
            it?
        </p>
        `
    } else if (leng === 'AM') {
        imgContent.innerHTML = `
        <h1>CODE MATTER</h1>
        <h2>Igniting minds, shaping futures!</h2>
        <p>
        Code Matter դպրոցի գլխավոր առաքելությունն է հասանելի դարձնել որակյալ և պրոֆեսիոնալ կրթությունը այն մարդկանց համար, ովքեր ցանկություն ունեն ներգրավվել ՏՏ ոլորտ։ Այս նպատակից ելնելով մենք կազմել ենք դասընթացներ, որոնք նախատեսված են բոլոր մակարդակների համար՝ սկսնակներից մինչև գործող մասնագետներ։
        Որակյալ կրթությունը ապահով և ուժեղ ապագայի հիմնաքարն է, և մենք մեծ սիրով ու պատասխանատվությամբ խթանում ենք վերջինիս զարգացմանը:
        </p>
        `
    }
}

setLenguages("AM")

const make_languages = (langs) => {
    langs.map(lang => {
        const lang_name = document.createElement('p')

        if (lang.state) {
            lang_name.innerText = lang.name
            def_language.appendChild(lang_name)
            defLeng = lang_name.innerText
            localStorage.setItem('leng', defLeng)
            setLenguages(defLeng)
        } else {
            lang_name.addEventListener('click', () => change(lang, langs))
            lang_name.innerText = lang.name
            closed_language.appendChild(lang_name)
        }

    })
    def_language.appendChild(closed_language)
}

create_pluses(pluses_conf)

create_company_logos(logos_conf)
// console.log(mailContainer)





const close_or_open = (e) => {
    e.type === 'mouseover' ? closedOpen = true : closedOpen = false;
    closed_language.style.display = closedOpen ? 'flex' : 'none'
}

const change = (lang, langs) => {
    closed_language.style.display = 'none'
    let arr = langs.map(l => {
        l.state = false
        return l
    })
    lang.state = !lang.state
    def_language.innerHTML = ''
    closed_language.innerHTML = ''
    localStorage.setItem('lengs', JSON.stringify(arr))
    // make_languages(arr)
}

// def_language.addEventListener('mouseover', (e) => close_or_open(e))
// def_language.addEventListener('mouseleave', (e) => close_or_open(e))

// make_languages(JSON.parse(localStorage.getItem('lengs')) || languages)

// ====================================

const create_curse = (post, inputCurse) => {


    let boxContent = document.createElement('div')
    boxContent.className = 'boxContent'
    box.innerHTML = '';
    let heading3 = document.createElement('h3');
    heading3.className = 'coursTitle'
    let textCont = document.createElement('div')
    textCont.className = 'textCont'
    let coursType = document.createElement('p');
    coursType.className = 'coursType'
    let paragraph = document.createElement('p');
    let paragraph1 = document.createElement('p');
    textCont.append(heading3, coursType, paragraph, paragraph1)
    let more = document.createElement('a');
    let img = document.createElement('img');

    let loading_div = document.createElement('div')
    let div1 = document.createElement('div')
    progress_bar = div1
    let progress = document.createElement('progress')
    let head = document.createElement('p')

    loading_div.className = 'progress_bar_containe'
    div1.className = "progress-bar progress-html"
    head.innerText = 'Ազատ տեղերի առկայություն'
    head.className = 'pa'
    progress.id = "progress-html"
    root.style.setProperty('--my-peples-min', post.people_count.min);
    root.style.setProperty('--my-peples-max', post.people_count.max);

    console.log(root)
    if (postBox.offsetTop - scrollY - 10 < window.innerHeight + 10) {
        root.style.setProperty('--animation-start-curses', 100)
    }


    div1.appendChild(progress)

    heading3.innerText = post.name
    coursType.innerText = post.off_of
    paragraph.innerText = post.post_text
    paragraph1.innerText = post.prof
    inputContent = heading3.innerText

    question ? inputCurse.value = heading3.innerText : inputCurse.value = '';

    let imgBox = document.createElement('div')
    more.href = `../curses/curses.html?id=${post.id}`
    loading_div.append(head, div1, more)


    fetch("../svg/more-button.html").then((res) => res.text())
        .then((text) => { more.innerHTML = text })
        .catch((e) => console.error(e));
    // sessionStorage.setItem('id', JSON.stringify(post))
    img.src = post.path
    img.alt = post.name
    imgBox.appendChild(img)
    imgBox.className = 'box_image'
    boxContent.append(textCont, loading_div)
    box.append(boxContent, imgBox)
}

postBox.append(box, dotBox)

mailContainer.appendChild(mailRegistration(question))
const input_curses = document.querySelector('#extra-info')
const defButton_type = document.querySelector('.typeReg').children[0]
defButton_type.addEventListener('click', () => input_curses.value = inputContent)
const dot_click = (ind) => {
    dote_arr.map((dote, i) => {
        ind === i ? dote.style.backgroundColor = '#5ebb46' :
            dote.style.backgroundColor = '#717171';
    });

    create_curse(posts_conf[ind], input_curses)
    curseCount = ind
}

const create_curse_change_handler = (count) => {
    curseCount += count
    curseCount >= posts_conf.length ? curseCount = 0 :
        curseCount < 0 ? curseCount = posts_conf.length - 1 : '';
    dot_click(curseCount)
}


const create_dotes = (dotes) => {
    // console.log(dotes)
    dotes.map((dot, ind) => {
        let coma = document.createElement('span')
        coma.className = 'dot'
        coma.addEventListener('click', () => dot_click(ind))
        dotBox.appendChild(coma)
    })
    dote_arr = Array.from(document.querySelectorAll('.dot'))

    create_curse_change_handler(0)
}

create_dotes(posts_conf)
prev.addEventListener('click', () => (create_curse_change_handler(-1)))
next.addEventListener('click', () => (create_curse_change_handler(1)))

create_faq(faqs_conf)

const create_teachers_box = (teachers) => {
    teachers.map((teach) => {

        const card = document.createElement('div')
        const img_div = document.createElement('div')
        const img = document.createElement('img')
        const details = document.createElement('div')
        const span = document.createElement('span')
        const ul = document.createElement('ul')

        card.className = 'card'
        img_div.className = 'image'

        img.src = teach.img_path
        img.alt = teach.as
        ul.className = 'details'

        span.innerText = teach.as

        const nameLi = document.createElement('li')
        const asLi = document.createElement('li')

        nameLi.innerText = teach.name
        asLi.innerText = teach.as
        ul.append(nameLi, asLi)
        const li = document.createElement('li')
        teach.socs.map((fa) => {

            const a = document.createElement('a')
            const iconImg = document.createElement('img')

            a.href = fa.url

            iconImg.src = fa.icon
            iconImg.alt =

                a.appendChild(iconImg)
            li.appendChild(a)
            ul.appendChild(li)
        })

        img_div.appendChild(img)


        card.append(img_div, ul)
        teachers_section.appendChild(card)
    })
}





observer.observe(choose_we)
observer.observe(feedbacks)
observHeading.observe(heading)
// progress_barObserver.observe(progress_bar)
create_teachers_box(teachers_conf)

// creatingListOfTargets(black_h2, footerWebsite, "en")
creatingListOfTargets(pageNavigation, footerWebsite, 'en')
// scrollX_Sport(choose_we.firstElementChild)











