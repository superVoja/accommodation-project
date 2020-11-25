require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const { body,validationResult } = require('express-validator');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
const { callbackPromise } = require('nodemailer/lib/shared')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Body Parser
  app.use(bodyParser.urlencoded({ extended: false}));

  app.use(bodyParser.json());
 

  app.post('/submit', (req, res) =>{
    output = `

    <h3>Nova Poruka od:</3>
    <p3>${req.body.name}</p>
    <h3>Email:</3>
    <p3>${req.body.email}</p>
    <h3>Smestaj:</3>
    <p3>${req.body.selected}</p>
    <h3>Poruka:</3>
    <p3>${req.body.message}</p>
    
    `;

    let transporter = nodemailer.createTransport({
      host: "mail.apartmaniusokobanji.rs",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'kontakt@apartmaniusokobanji.rs', // generated ethereal user
        pass: process.env.NODEMAILER_PASSWORD, // generated ethereal password
      },
      tls:{
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Slobodan Smestaj 👻" kontakt@apartmaniusokobanji.rs', // sender address
      to: "kontakt@apartmaniusokobanji.rs", // list of receivers
      subject: "Nova poruka", // Subject line
      text: "Nova poruka Apartmani u Sokobanji", // plain text body
      html: output, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    
    
  });
  // Give nuxt middleware to express
  app.use(nuxt.render)


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}


start()
