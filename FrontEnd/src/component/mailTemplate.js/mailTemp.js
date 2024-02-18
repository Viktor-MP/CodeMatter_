import { sendMessageOnTelegram } from "../../global/sendMessage.js";

const sendUserData = (e) => {
    const myForm = document.querySelector('.container-reg')
    const formData = new FormData(myForm)
    const res = Object.fromEntries(formData)
    console.log(res)

    const { fname, lname, email, phone, text } = res;

    const validator_mail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const validator_phone = /^(\+374|\d{1})([1-9]\d{7})$/;

    if (fname && lname && (validator_mail.test(email) || validator_phone.test(phone))) {
        e.preventDefault()
        let message = `
                now user click on submit
                user name - ${fname} ${lname}
                user contacts 
                mail ${email}
                phone ${phone} 
                user question
                ${text}
            `
        sendMessageOnTelegram(message, "-4106014537")
    }
};

const mailRegistration = () => {
    let formContent = document.createElement('form')
    formContent.classList.add('container-reg')
    // formContent.classList.add('formContent')
    formContent.innerHTML = `
    <div class="typeReg">
        <div class="buttonTypeChused button-type">Գրանցում</div>
        <div class="button-xor button-type">Խորհրդատվություն</div>
    </div>

    <input name="fname" type="text"  placeholder="Անուն" required />
    <input name="lname" type="text" placeholder="Ազգանուն" required />
    <input name="email" type="email" placeholder="Էլ․ հասցե" />
    <input name="phone" type="text" placeholder="հեռախոսահամար"/>
    <input name="text" id="extra-info" type="text" placeholder="գրիր քո հարցը" required />
    <input class="button" type="submit" id="button-submit" value="Submit">
    `

    const inputs = formContent.querySelector('.typeReg').children
    const input_curses = formContent.querySelectorAll("input")[4]
    const submitButton = formContent.querySelector("#button-submit");

    submitButton.addEventListener("click", e => { sendUserData(e) });

    inputs[0].addEventListener('click', () => {
        inputs[0].classList.add('buttonTypeChused')
        inputs[1].classList.remove('buttonTypeChused')
    })
    inputs[1].addEventListener('click', () => {
        input_curses.value = ''
        inputs[1].classList.add('buttonTypeChused')
        inputs[0].classList.remove('buttonTypeChused')
    })


    return formContent

}


export { mailRegistration }