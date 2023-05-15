import React from 'react'
import NavBarTest from './navbartest'
import FlowSideBar from './FlowSideBar'
import FlowButtons from './FlowButtons'
import auth from '../firebase'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Coding = () => {
    const { id } = useParams();
    const [questionData, setQuestionData] = useState([])
    useEffect(() => {
        const loadQuestionData = async () => {
            const data = await axios.get('http://localhost:5000/question/' + id)
            // console.log(data.data)
            setQuestionData(data.data)
        }
        loadQuestionData()
    }, [])
    const localUser = localStorage.getItem('codeHavenUser')
    const localUserEmail = localStorage.getItem('codeHavenUserEmail')
    const user = auth.currentUser
    if (localUser) {
        return <>
            <NavBarTest user={user} />
            {/* <div className="flex flex-col">
                <span>{questionData?._id}</span>
                <span>{questionData?.question_title}</span>
            </div> */}
            <FlowSideBar question={questionData} />
        </>
    }
    else {
        return <Navigate to='/login' />
    }
}

export default Coding