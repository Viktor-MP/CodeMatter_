const express = require("express")
const path = require('path')
const {Curses, Faqs, Maps} = require('./db/Curses.js')
const {Teachers, Pluses, Feedbacks, Events, MainFaqs} = require('./db/Outer.js')
const app = express();
const cors = require('cors');





app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Request-Method', '*'); // Разрешить все методы
    next();
});
app.use(express.static(path.join(__dirname, 'src')));
// app.set('trust proxy', true);
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/home/home.html'));
});

app.get('/api-v1/get_teachers', (req, res) => {
    try {
        Teachers.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_pluses', (req, res) => {
    try {
        Pluses.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_feedbacks', (req, res) => {
    try {
        Feedbacks.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_events', (req, res) => {
    try {
        Events.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_main_faqs', (req, res) => {
    try {
        MainFaqs.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_curses', (req, res) => {
    try {
        Curses.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_curse_maps', (req, res) => {
    try {
        Maps.findAll({
            where: {
                curse_id: req.query.id
            }
        }).then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api-v1/get_curse_faqs', (req, res) => {
    try {
        Faqs.findAll({
            where: {
                curse_id: req.query.id
            }
        }).then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {
        ``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// const { WebSocketServer } = require('ws')
// const sockserver = new WebSocketServer({ port: 443 })
// sockserver.on('connection', ws => {
//     console.log('New client connected!')
//     ws.on('message', function incoming(message) {
//         message = JSON.parse(message)
//         let messages = message.messages
//
//         let user_last_message = messages[messages.length - 1].content
//         cld.detect(user_last_message).then((detect_lang) => {
//             let lang = detect_lang.languages[0].code
//             console.log("USER MESS: ", user_last_message)
//             if (lang === "hy") {
//                 translate(user_last_message, lang, 'en').then((translate_text) => {
//                     let user_message_en = translate_text.google.text
//                     console.log(`Translate to en: `, user_message_en)
//                     messages[messages.length - 1].content = user_message_en
//                     console.log(user_last_message)
//                     GPT_GET_TEXT(messages).then((GPT_text) => {
//                         console.log(`AI Default text: en`, GPT_text)
//                         messages.push(GPT_text)
//                         translate(GPT_text.content, 'en', lang).then((send_text) => {
//                             console.log(send_text.google.text)
//                             message["answer"] = send_text.google.text
//                             ws.send(JSON.stringify(message))
//                         })
//                     })
//                 })
//             } else if (lang === "en" || lang === "ru") {
//                 GPT_GET_TEXT(messages).then((GPT_text) => {
//                     console.log("AI text: ", GPT_text.content)
//                     message["answer"] = GPT_text.content
//                     ws.send(JSON.stringify(message))
//                 })
//             }
//         })
//     });
//     ws.onerror = function () {
//         console.log('websocket error')
//     }
//     ws.on('close', () => console.log('Client has disconnected!'))
//
// })
app.listen(3000, () => {console.log(`Server is running on port 3000`)});