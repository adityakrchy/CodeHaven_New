import React, {useState} from 'react'
import axios from 'axios'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import auth  from './firebase'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/dashboard')
                localStorage.setItem('codeHavenUser', user.uid)

                // ...
            })
        }
        catch(error){
            console.log(error)
        }

       
    }
    return (
        <>

            <div className="homepageWrapper">
                <div className="formWrapper">
                    <img src="/logo_bg_removed.png" alt="code-haven-logo" className='logoImg' />
                    <div className="formWrapperText">
                        <h2>Sign Up</h2>
                        <p>Join the community of coders</p>
                    </div>
                    <div className="inputGroup">
                        <input type="text" style={{borderRadius:'5px'}} name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id' className="inputBox" />
                        <input type="password" style={{borderRadius:'5px'}} name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' className="inputBox" />
                        <input type="password" name="confirmPassword" style={{borderRadius:'5px'}} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}  placeholder='Confirm Password' className="inputBox" />
                        <input type="text" name="username" value={username} style={{borderRadius:'5px'}} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter Username' className="inputBox" />
                        <button onClick={handleSubmit} className="btn join-btn">Sign Up</button>
                    </div>
                </div>
                <div className="passwordResetText">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </>
    )
}

export default Signup