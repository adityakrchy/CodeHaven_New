import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="bg-gray-100">
            <header className="bg-[#1c1e29] shadow px-4">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <h1 className="text-xl font-bold">
                        <Link to="/"><img className='h-12' src='/logo_bg_removed.png' /></Link>
                    </h1>
                    <nav>
                        <ul className="flex gap-2">
                            <li>
                                <Link
                                    to="/login"
                                    className="block py-2 px-4 text-white rounded hover:bg-[#712ff5]"
                                >
                                    Log In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/signup"
                                    className="block py-2 px-4 text-white bg-[#8951f9] hover:bg-[#712ff5] rounded font-bold"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What makes CodeHaven different?
                    </h2>
                    <ul className="list-disc list-inside mb-6">
                        <li className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg text-gray-700">Problem Solving Platform</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg text-gray-700">Online IDE</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg text-gray-700">Collboration Together</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg text-gray-700">Supportive community</span>
                        </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-8">
                        Whether you're just starting out or looking to take your coding skills to the next level, CodeHaven has everything you need to succeed. So what are you waiting for? Sign up for our courses today and start building your future.
                    </p>
                    <div className="flex justify-center mb-8">
                        <button className="bg-[#8951f9] hover:bg-[#712ff5] text-white font-bold py-2 px-6 rounded">
                            Sign Up Now
                        </button>
                    </div>
                    {/* <hr className="border-gray-400 mb-8" /> */}

                    <hr className="border-gray-400 mb-8" />
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Testimonials
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <p className="text-lg text-gray-700 mb-4">
                                    "CodeHaven helped me kickstart my career as a web developer. The courses were comprehensive and the community was incredibly supportive."
                                </p>
                                <p className="text-lg text-gray-700 font-bold">
                                    - John, Web Developer
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <p className="text-lg text-gray-700 mb-4">
                                    "I was able to create my first mobile app after completing CodeHaven's mobile app development course. The instructors were knowledgeable and the curriculum was top-notch."
                                </p>
                                <p className="text-lg text-gray-700 font-bold">
                                    - Sarah, Mobile App Developer
                                </p>
                            </div>
                        </div>
                    </section>
                    <hr className="border-gray-400 mb-8" />
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    How do I enroll in a course?
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    To enroll in a course, simply click the "Enroll Now" button on the course page and follow the instructions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    What if I have a question about the course content?
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    If you have a question about the course content, you can post it in the course forum or reach out to one of our instructors directly.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    How long do I have access to the course materials?
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    You will have lifetime access to the course materials, including any updates or new content that may be added in the future.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Is there a refund policy?
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course, you can request a full refund within 30 days of your purchase.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="flex justify-center">
                        <button className="bg-[#8951f9] hover:bg-[#712ff5] text-white font-bold py-2 px-6 rounded">
                            Sign Up Now
                        </button>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default LandingPage;