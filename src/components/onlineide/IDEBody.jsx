import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { atomone } from '@uiw/codemirror-theme-atomone'
import { Tabs } from 'flowbite-react'
import axios from 'axios'

const IDEBody = () => {
    const [code, setCode] = useState('');
    console.log(code)
    const handleChange = (editor, data, value) => {
        setCode(editor);
    };


    const [activeTab, setActiveTab] = useState(0);
    const [codeInput, setCodeInput] = useState('');
    const [output, setOutput] = useState('');
    const handleInputChange = (e) => {
        setCodeInput(e.target.value);
    }

    const handleReset = () => {
        setCode('');
    }

    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const tabs = [
        {
            label: 'Input',
            content: <textarea value={codeInput} onChange={handleInputChange} className="w-full h-full min-h-[18vh] text-gray-900" placeholder="Enter your code here"></textarea>,
        },
        {
            label: 'Output',
            content: <textarea value={output} disabled className='w-full h-full min-h-[18vh] text-gray-900' placeholder='Output will be showed here.'></textarea>,
        },
    ];




    const handleRun = async () => {
        const response = await axios.post('http://localhost:5000/compilecode', {
            code: code,
            input: codeInput,
            language: selectedValue
        })
        console.log(response.data)

        setOutput(response.data)
    }
    return (
        <>
            <select className='text-gray-900' value={selectedValue} onChange={handleSelectChange}> 
                <option value="select">Select Language</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
            </select>
            <CodeMirror
                code={code}
                theme={atomone}
                height='61vh'
                value={code}
                onChange={handleChange}
            />
            <div className="flex ">
                <div className="max-w-md mx-auto flex-1 ">
                    <div className="flex border-b border-gray-200">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`${activeTab === index ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } flex-1 inline-flex items-center justify-center border-b-2 font-medium text-sm`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="py-4">
                        {tabs[activeTab].content}
                    </div>

                </div>
                <div className="btn  relative  top-3 gap-4">
                    <span className='bg-[#8c52ff] btn p-5 rounded' onClick={handleRun}>Run</span>
                    <span className='bg-[#8c52ff] btn p-5 rounded' onClick={handleReset}>Reset</span>
                </div>


            </div>
        </>
    )
}

export default IDEBody