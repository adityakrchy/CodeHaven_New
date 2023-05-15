import React from 'react'
import { Dropdown, Avatar } from 'flowbite-react'
import { signOut } from 'firebase/auth'
import auth from '../firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const NavBarTest = ({ user }) => {
    const localEmail = localStorage.getItem('codeHavenUserEmail')
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem('codeHavenUser')
            console.log('Sign-out successful.')
            navigate('/login')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return (
        <>


            <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/dashboard" className="flex items-center">
                        <img src="/logo_bg_removed.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    </Link>
                    <div className="flex items-center md:order-2">

                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                               
                                <span className="block truncate text-sm font-medium">
                                    {localEmail || "email@email.com"}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                               <Link to='/dashboard'> Dashboard</Link> 
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleSignOut}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        
                    </div>
                </div>
            </nav >


        </>
    )
}

export default NavBarTest