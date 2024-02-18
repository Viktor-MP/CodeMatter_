const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { Curses, Faqs, Maps } = require('./db/Curses')
const { Teachers, Pluses, Feedbacks, Events, MainFaqs } = require('./db/Outer')

app.use(express.static(path.join(__dirname, 'src')));
app.set('trust proxy', true);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/home/home.html'));
});

app.get('/get_teachers', (req, res) => {
    try {
        Teachers.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_pluses', (req, res) => {
    try {
        Pluses.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_feedbacks', (req, res) => {
    try {
        Feedbacks.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_events', (req, res) => {
    try {
        Events.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_main_faqs', (req, res) => {
    try {
        MainFaqs.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_curses', (req, res) => {
    try {
        Curses.findAll().then(result => {
            let json_data = []
            result.map((item) => {
                json_data.push(item.dataValues)
            })
            res.json(json_data)
        })
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_curse_maps', (req, res) => {
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
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/get_curse_faqs', (req, res) => {
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
    } catch (error) {``
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {console.log(`Server is running on port ${port}`);});