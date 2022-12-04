const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require ('./models/shortUrl.js')
const dotenv = require('dotenv').config()
const  cors = require('cors');
const app = express()
const uri = process.env.ATLAS_URI
mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
app.set('view engine', 'ejs')

app.use(
  cors({
    origin: "http://localhost:9500",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get("/getData",async (req,res)=>{
  const shortUrls = await ShortUrl.find()
  res.send( { shortUrls: shortUrls })
});
  
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})
app.listen(process.env.PORT || 5000);