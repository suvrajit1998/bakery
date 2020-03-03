const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Joi = require('joi')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const Item = mongoose.model('Item', itemSchema)

const validate = Item => {
  const schema = {
    name: Joi.string()
      .min(4)
      .max(100)
      .required(),
    imageUrl: Joi.string().required(),
    price: Joi.number().required()
  }

  return Joi.validate(Item, schema)
}

exports.validateItem = validate
exports.Item = Item
exports.itemSchema = itemSchema
