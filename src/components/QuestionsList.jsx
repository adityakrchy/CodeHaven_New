import React from 'react'
import NavBarTest from './navbartest'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const QuestionsList = () => {
    
    useEffect(() => {
        const loadQuestions = async () => {
            const response = await axios.get('http://localhost:5000/questions').then((response) => {
                console.log(response.data)
                setQuestions(response.data)
            }
            ).catch((error) => {
                console.log(error)
            }
            )

        }

        loadQuestions()
    }, [])

    const [questions, setQuestions] = useState([])
    const handleQuestionRender = async (id) => {
        try {
            const response = await axios.post(`http://localhost:5000/question/${id}`)
            // console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <NavBarTest />

            <ul className=" min-h-[90vh] h-full divide-y bg-white w-full p-10 divide-gray-200 dark:divide-gray-700">
                {questions.map((question, index) => {
                    return (
                        <li key={index} className="pb-3 sm:pb-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <Link onClick={handleQuestionRender(question._id)} to={`/codingplatform/${question._id}`}>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {question.question_title}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {question.is_submitted ? "Submitted" : "Not Submitted"}
                                        </p>
                                    </Link>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {question.question_label}
                                </div>
                            </div>
                        </li>
                    )
                })}


            </ul>

        </>

    )
}

export default QuestionsList