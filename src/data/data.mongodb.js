const express = require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
// const morgan = require('morgan')
const app = express()

const { Item, itemSchema, validateItem } = require('./items')

app.use(express.json())

mongoose
  .connect('mongodb://localhost/cakeshop')
  .then(() => console.log('connected to mongoDB...'))
  .catch(ex => console.log(ex.message))

const mainSchema = new mongoose.Schema({
  title: {
    type: String
  },
  items: { type: itemSchema, required: true }
})

const Main = mongoose.model('Main', mainSchema)

// app.post('/api/item', async (req, res) => {
//   try {
//     const { error } = validateItem(req.body)
//     if (error) return res.status(400).send(error.details[0].message)

//     let item = new Item({
//       name: req.body.name,
//       imageUrl: req.body.imageUrl,
//       price: req.body.price
//     })

//     item = await item.save()

//     res.send(item)
//   } catch (err) {
//     console.log(err)
//   }
// })

app.post('/api/ourmenu', async (req, res) => {
  try {
    const { error } = validateItem(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let main = new Main({
      title: req.body.title,
      items: [
        new Item({
          name: req.body.name,
          imageUrl: req.body.imageUrl,
          price: req.body.price
        })
      ]
    })

    main = await main.save()

    res.send(main)
  } catch (err) {
    console.log(err)
  }
})

const validate = main => {
  const schema = {
    title: Joi.string()
      .min(5)
      .required()
  }
  return Joi.validate(main, schema)
}

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Listning no port: ${port}`))
