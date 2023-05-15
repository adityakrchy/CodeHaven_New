const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question_title: String,
    question_label: String,
    question_description: String,
    sample_input: String,
    sample_output: String,
    is_submitted: Boolean,
},
{
    // collection: 'CodeHaven'
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question