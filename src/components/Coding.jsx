import React from 'react'
import NavBarTest from './navbartest'
import FlowSideBar from './FlowSideBar'
import FlowButtons from './FlowButtons'
import auth from '../firebase'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Coding = () => {
    const [questions2, setQuestions2] = useState([])
    console.log(questions2)
    useEffect(() => {
        const loadQuestionsinCodingpage = async () => {
            const response = await axios.get('http://localhost:5000/questions').then((response) => {
                console.log(response.data)
                setQuestions2(response.data)
            }
            ).catch((error) => {
                console.log(error)
            }
            )

        }

        loadQuestionsinCodingpage()
    }, [])
    const localUser = localStorage.getItem('codeHavenUser')
    const localUserEmail = localStorage.getItem('codeHavenUserEmail')
    const user = auth.currentUser
    if (localUser) {
        return <>
            <NavBarTest user={user} />
            <FlowSideBar  questions={questions2} />
            
            <FlowButtons />
        </>
    }
    else {
        return <Navigate to='/login' />
    }
}

export default Coding