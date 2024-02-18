import { sendMessageOnTelegram } from "../global/sendMessage.js";
import { create_company_logos, observer, create_pluses, creatingListOfTargets } from "../global/global.js";
import { logos_conf, pluses_conf, pageNavigation, TOKEN } from "../global/conf.js";

const footerWebsite = document.querySelector('.footer_website')
const choose_we = document.querySelector('.choose_we')

const generate_promo = () => {
    // let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // let promo = ""
    // for (let i = 0; i < 12; i++) {
    //     let rand = Math.floor(Math.random() * alphabet.length)
    //     promo += alphabet[rand]
    // }
    return "CODEWEBJS42"
}

const generate_promo_code = () => {
    const url = new URLSearchParams(window.location.search)
    let street = url.get('street') || "puskin"

    let button_whatsapp = document.querySelector('.whatsapp_btn')
    let b = document.createElement('a')
    // let span_b = document.createElement('span')
    b.title = "PromoCode"
    b.innerText = "Generate on WhatsApp"

    b.href = `https://wa.me/+37498134315?text=Promocode - ${generate_promo()}`

    let button_telegram = document.querySelector('.telegram_btn')
    let a = document.createElement('a')
    a.title = "PromoCode"
    a.innerText = "Generate on Telegram"
    a.href = `https://t.me/code_matter_bot?start=promo${generate_promo()}`
    console.log(street)
    sendMessageOnTelegram(`street: ${street.toUpperCase()}`, "1357108258", {
        inline_keyboard: [
            [{ text: 'Ավելացնել', callback_data: `addStreet_${street.toUpperCase()}` }]
        ],
    });



    function createPromoButton(className, color, messenger, messengerLink, img_path, street) {
        let button = document.querySelector(`.${className}`);

        button.style.backgroundColor = color;
        let link = document.createElement('a');
        link.title = "PromoCode";
        link.innerText = `ուղարկել`;
        link.href = messengerLink;

        link.addEventListener('click', () => {
            sendMessageOnTelegram(`
User clicked on the generate promo code ${messenger} button.
Street: ${street}
Promo code: ${generate_promo()}
`, "-4106014537");
        });

        let img = document.createElement("img")
        img.src = img_path
        img.alt = messenger

        button.append(img, link)
    }

    createPromoButton('whatsapp_btn', '#25D366', 'WhatsApp', `https://wa.me/+37455134311?text=Բարև ձեզ, խնդրում եմ հաստատել իմ պրոմոկոդը: ${generate_promo()}\n Շնորհակալություն 💚 `, '../media/soc-icons/ico-Whatsapp.webp', street);
    createPromoButton('telegram_btn', '#0088cc', 'Telegram', `https://t.me/code_matter_bot?start=promo${generate_promo()}`, '../media/soc-icons/ico-Telegram.webp', street);
}

create_company_logos(logos_conf)
create_pluses(pluses_conf)
observer.observe(choose_we)
creatingListOfTargets(pageNavigation, footerWebsite, 'en')

generate_promo_code()