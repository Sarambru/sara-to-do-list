const mongoose = require('mongoose')

// make a schema
const Task = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

// turn it into a model

const taskModel = mongoose.model('task', Task)

module.exports = taskModel
