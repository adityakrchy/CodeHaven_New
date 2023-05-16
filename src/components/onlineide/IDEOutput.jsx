import React, { useState } from 'react'
import { Tabs } from 'flowbite-react'
const IDEOutput = () => {
    const [toggle, setToggle] = useState(0);

    const handleToggle = (index) => {
        setToggle(index);
    }

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Input',
            content: <textarea className="w-full h-full min-h-[18vh] text-gray-900" placeholder="Enter your code here"></textarea>,
        },
        {
            label: 'Output',
            content: <textarea disabled className='w-full h-full min-h-[18vh] text-gray-900' placeholder='Output will be showed here.'></textarea>,
        },
    ];


    const handleReset = ()=>{
        console.log(code)
    }


    return (


        <>
           
        </>


    )
}

export default IDEOutput