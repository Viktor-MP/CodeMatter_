const choose_we = document.querySelector(".choose_we");
const faq_bar = document.querySelector(".questions");
const root = document.documentElement;

let lastScrollTop = document.documentElement.scrollTop;
// window.pageYOffset ||                   window.pageYOffset ||

let leftCount = 0;
// const scrollX_Sport = (bar) => {
//     console.log(bar)
//     bar.addEventListener('mouseover', () => {
//         // bar.scrollIntoView(false),
//         window.addEventListener(
//             'scroll',
//             function handleScroll() {
//                 const scrollTopPosition =
//                     document.documentElement.scrollTop;
//                 if (scrollTopPosition > lastScrollTop) {
//                     console.log('scrolling down');
//                     leftCount = leftCount + 0.5
//                     bar.style.translate = leftCount + 'vw'
//                 } else if (scrollTopPosition < lastScrollTop) {
//                     console.log('scrolling up');
//                     leftCount = leftCount - 0.5
//                     bar.style.translate = leftCount + 'vw'
//                 }
//                 lastScrollTop =
//                     scrollTopPosition <= 0 ? 0 : scrollTopPosition;
//             },
//             false,
//         )
//     })
// };

const copyOnClicpBoard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);

    e.target.style.position = "relative";

    let copied = document.createElement("p");
    copied.className = "copyTheText";
    copied.innerText = "copied";
    e.target.appendChild(copied);
    setTimeout(() => {
        e.target.removeChild(copied);
    }, 1000);
};
const setAtribut = (el) => {
    // console.log(el)
    el.setAttribute("href", "sms:+37498134315");
};

const setElementBehaver = (event) => {
    // console.log(event)
    // console.log(navigator.userAgentData.mobile)
    navigator.userAgentData.mobile
        ? setAtribut(event.target)
        : copyOnClicpBoard(event);
};

const smoothBehaver = (listArr) => {
    let headigTarget = document.querySelector(`#${listArr}`)
    console.dir(headigTarget)
    if (!headigTarget) {
        // location.replace()
        window.location.href = '../home/home.html';
    }

    let scrollingPosition = headigTarget.offsetTop;

    if (listArr === 'contacts') {
        let lessonsDoc = document.querySelector('#lessons')
        scrollingPosition =
            scrollingPosition + lessonsDoc.offsetTop + lessonsDoc.offsetHeight

    }
    window.scrollTo({
        top: scrollingPosition - 40,
        behavior: "smooth",
    });
};

const creatingListOfTargets = (nav, listTargets, leng) => {
    const asceheadingsnding = nav.sort(
        (a, b) => a[leng] - b[leng]
    );


    return asceheadingsnding.map((targ, ind) => {

        let li = document.createElement("li");
        li.addEventListener('click', () => { smoothBehaver(targ.id) })
        if (targ.id === 'contacts') {
            li.classList.add("listHiding");
        }
        li.innerText = targ[leng];

        listTargets.appendChild(li);
    });
};

const create_faq = (faqs) => {
    console.log(faqs)
    let p = true;
    faqs.map((faq, ide) => {
        let faqBox = document.createElement("div");
        faqBox.className = `FAQ-box`;
        let faqQuest = document.createElement("p");
        let faqUnswer = document.createElement("p");
        faqBox.dataset.state = 'false'
        faqBox.classList.add('hiden')
        faqQuest.innerHTML = `
            <span class='rote'>❯</span>
            <span>${faq.harc}</span>            
        `;
        faqUnswer.innerText = faq.patasxan;

        const changeClasses = (arg1, arg2, targ) => {
            targ.classList.remove(arg1)
            targ.classList.add(arg2)
        }

        faqBox.addEventListener("click", (e) => {
            const curTarget = e.currentTarget
            if (curTarget.dataset.state === 'false') {
                changeClasses('hiden', 'show', curTarget)
                curTarget.dataset.state = 'true'
            } else {
                changeClasses('show', 'hiden', curTarget)
                curTarget.dataset.state = 'false'
            }

        });

        // FaqP.appendChild(FaqA);
        faqBox.append(faqQuest, faqUnswer);
        faq_bar.appendChild(faqBox);
    });
};

const create_pluses = (pluses) => {
    let posts = document.createElement("div");
    posts.className = "posts";
    pluses.map((plus) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        div.className = "post_choose_we";
        img.src = plus.img;
        img.alt = plus.header;
        img.style.width = "100%";
        img.className = "post_choose_we_img";
        h4.innerText = plus.header;
        p.innerText = plus.description;

        div.append(img, h4, p);
        posts.appendChild(div);
    });
    choose_we.appendChild(posts);
};

const options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.1
};

window.addEventListener("beforeunload", () => window.scrollTo(0, 0))


const interSection_entrys = (entrys) => {
    entrys.map(entry => {
        let targ = entry.target.firstElementChild
        entry.isIntersecting && targ.classList.add('left_end');
    })
}

const scroll_hendler = (e) => {
    window.removeEventListener('scroll', scroll_hendler)
    window.scrollTo({
        top: e.target.body.children[1].children[2].clientHeight - 50,
        behavior: "smooth",
    });
}


const observer = new IntersectionObserver(interSection_entrys, options)
const headingScroll_entrys = (entrys) => {

    if (entrys[0].isIntersecting) {
        window.addEventListener('scroll', scroll_hendler)
    }
    else {
        window.removeEventListener('scroll', scroll_hendler)
        observHeading.unobserve(entrys[0].target)
    }
}
const observHeading = new IntersectionObserver(headingScroll_entrys)

const progerss_options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "-100px",
    threshold: 1
}
const progrss_barHendler = (entry) => {
    console.log(entry)
    if (entry[0].isIntersecting) {

        // console.log(entry[0].target.'::before')
        // root.style.setProperty('--my-peples-min', post.people_count.min);

        root.style.setProperty('--animation-start-curses', 100)
        entry[0].target.style.animationPlayState = 'running'
        // entry[0].target
    }
}

const progress_barObserver = new IntersectionObserver(progrss_barHendler, progerss_options, root)

const create_company_logos = (logos) => {
    const logos_section = document.querySelector(".logos");
    const create_slide_div = () => {
        let logos_slide = document.createElement("div");
        logos_slide.className = "logos-slide";
        logos.map((logo) => {
            let img = document.createElement("img");
            img.title = logo.name;
            img.src = logo.img;
            img.alt = logo.name;
            logos_slide.append(img);
        });
        return logos_slide;
    };

    logos_section.append(create_slide_div(), create_slide_div());
};




export {
    observer,
    observHeading,
    progress_barObserver,
    create_faq,
    smoothBehaver,
    copyOnClicpBoard,
    setElementBehaver,
    creatingListOfTargets,
    create_pluses,
    create_company_logos,
};
