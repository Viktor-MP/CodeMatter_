const express = require("express")
const path = require('path')
const {websocket} = require('./chat.js')
const {Curses, Faqs, Maps} = require('./db/Curses.js')
const {Teachers, Pluses, Feedbacks, Events, MainFaqs} = require('./db/Outer.js')
const axios = require("axios");
const cld = require("cld");
const punycode = require("punycode");
const app = express();
const port = 3000;





app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(path.join(__dirname, 'src')));
app.set('trust proxy', true);

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
const { detect } = require('langdetect');

// Now you can call the detect function
console.log(detect("running"));
// Detect language



// websocket.listen(8080, () => {console.log('Server is running on port 8080')});
app.listen(3004, () => {console.log(`Server is running on port 3000`)});