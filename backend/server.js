const express = require('express')
const app = express()
const Question = require('./db')
const compiler = require('compilex')
const options = { stats: true }

compiler.init(options)


const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aditya:ioT8hVBtGM82GjXZ@cluster0.wycbz.mongodb.net/').then(
    () => { console.log('Connected to MongoDB') },
    err => { console.log('Error connecting to MongoDB', err) }
)

const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/addquestions', async (req, res) => {
    try {
        const question = new Question({
            question_title: "Trapping Rain Water",
            question_label: "Hard",
            question_description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            sample_input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
            sample_output: "6",
            is_submitted: false,
        })
        await question.save()
        res.send(question).status(200)
    }
    catch (e) {
        res.send(e).status(400)
    }
})

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find({})
        res.send(questions).status(200)

    }
    catch (e) {
        res.send(e).status(400)
    }
})


app.get('/question/:id', async (req, res) => {
    const id = req.params.id
    try {
        const ques = await Question.findById(id)
        console.log(ques)
        res.send(ques).status(200)

    } catch (e) {
        console.log(e)
    }
})


app.post('/compilecode', async (req, res) => {
    const code = req.body.code;
    const language = req.body.language;
    console.log(language)
    if (language === "cpp") {
        let envData = { OS: "windows", cmd: "g++" };
        const inputData = req.body.input;
        if (inputData.length <= 0) {
            compiler.compileCPP(envData, code, function (data) {
                if (data.error) {
                    res.send(data.error).status(400)
                } else {
                    res.send(data.output).status(200)
                }
            }
            )
        }
        else {
            compiler.compileCPPWithInput(envData, code, inputData, function (data) {
                if (data.error) {
                    res.send(data.error).status(400)
                } else {
                    res.send(data.output).status(200)
                }
            }
            )
        }
    } else if (language == "python") {
        let envData = { OS: "windows", cmd: "python" };
        const inputData = req.body.input;
        if (inputData.length <= 0) {
            compiler.compilePython(envData, code, function (data) {
                if (data.error) {
                    res.send(data.error).status(400)
                } else {
                    res.send(data.output).status(200)
                }
            }
            )
        }
        else {
            compiler.compilePythonWithInput(envData, code, inputData, function (data) {
                if (data.error) {
                    res.send(data.error).status(400)
                } else {
                    res.send(data.output).status(200)
                }
            }
            )
        }
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})