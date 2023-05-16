

import React from 'react'
import code from './assets/code_1.png';
import editor from './assets/editor_1.png';
import remote from './assets/remote_1.png';
import { Dropdown, Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <>

            <div className="flex h-screen bg-gray-200">
                {/* <!-- Sidebar --> */}
                <aside className="w-64 h-full border-r-2 bg-gray-800">
                    <header className="px-6 py-4">
                        <Link to="https://flowbite.com/" className="flex items-center">
                            <img src="/logo_bg_removed.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        </Link>
                    </header>

                    <ul className="mt-4 ">
                        <li className="px-6 py-2 hover:bg-gray-100 hover:text-gray-900  ">
                            <Link to="#" className=" font-medium group-hover:text-gray-900"><span>Home</span></Link>
                        </li>
                        <li className="px-6 py-2 hover:bg-gray-100 hover:text-gray-900  ">
                            <Link to="/questionslist" className="font-medium group-hover:text-gray-900">Practice Coding</Link>
                        </li>
                        <li className="px-6 py-2 hover:bg-gray-100 hover:text-gray-900  ">
                            <Link to="/onlineide" className="font-medium group-hover:text-gray-900">Online IDE</Link>
                        </li>
                        <li className="px-6 py-2 hover:bg-gray-100 hover:text-gray-900  ">
                            <Link to="#" className="font-medium group-hover:text-gray-900">Remote IDE</Link>
                        </li>

                        <li className="px-6 py-2 hover:bg-gray-100 hover:text-gray-900  ">
                            <Link to="#" className="font-medium group-hover:text-gray-900">Settings</Link>
                        </li>
                    </ul>

                </aside>

                {/* <!-- Content --> */}
                <div className="flex-1 flex flex-col">
                    {/* <!-- Header --> */}
                    <header className="w-full bg-white h-16 border-b-2 border-gray-300 px-6 flex justify-between items-center">
                        <div className="flex items-center">


                            <div className="ml-4">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">Dashboard</h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <input type="text" className="h-10 px-3 pr-10 rounded-lg border-2 border-gray-200 text-gray-700 bg-white placeholder-gray-500 focus:outline-none" placeholder="Search..." />
                            </div>

                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="h-8 w-8 rounded-full object-cover" alt="Your avatar" />}
                            >
                                <Dropdown.Header>
                                    <span className="block truncate text-sm font-medium">
                                        {localStorage.getItem('codeHavenUserEmail')}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>


                        </div>
                    </header>

                    {/* <!-- Main content --> */}
                    <main className="flex-1 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                            <Link to="/questionslist" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={code} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Practice Coding</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Master your programming skills and reach new levels of expertise with consistent practice</p>
                                </div>
                            </Link>
                            <Link to="/onlineide" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={editor} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online IDE</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Empowering you to write, test, and run your code from a browser-based environment with easy access to a variety of tools and resources.</p>
                                </div>
                            </Link>
                            <Link to="/colabtogether" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={remote} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Colab Together</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Leverage the power of teamwork and real-time collaboration to bring your coding project to the next level and drive innovation forward.</p>
                                </div>
                            </Link>

                        </div>

                    </main>
                    {/* <div class="flex flex-wrap justify-center">

                        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                            <img src={code} alt="" class="h-full m-6" />

                            <h2 class="text-center px-2 pb-5">Practice Coding</h2>

                            <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Practice Coding</a>

                        </div>



                        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                            <img src={editor} alt="" class="h-full m-6" />

                            <h2 class="text-center px-2 pb-5">Online IDE</h2>

                            <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Online IDE</a>

                        </div>



                        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                            <img src={remote} alt="" class="h-full m-6" />

                            <h2 class="text-center px-2 pb-5">Colab Together</h2>

                            <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Colab Together</a>

                        </div>



                        

                    </div> */}
                </div>
            </div>


        </>
    )
}

export default Dashboard