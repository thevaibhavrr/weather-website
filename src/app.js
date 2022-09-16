const express = require('express')
const hbs = require('hbs')
const path = require('path');
const forecast = require('./utills/forecast');

const app = express();
const publicpath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, './templates/views')
const patialpath = path.join(__dirname, './templates/patials')


app.use(express.static(publicpath))
app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(patialpath)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weatherr', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'address doooo prbhuuu'
        })
    }

    forecast(req.query.address, (error, forecastdata) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            forecast: forecastdata,
            location: req.query.address,
            address: forecastdata.location
        })
    })
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(4000, (req, res) => {
    console.log('server is running on 4000 ')
})