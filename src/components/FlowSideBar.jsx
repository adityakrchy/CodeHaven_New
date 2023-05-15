import React, { useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi'
import { BiBuoy } from 'react-icons/bi'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { atomone, atomoneInit } from '@uiw/codemirror-theme-atomone';
import axios from 'axios';
import SidebarItem from 'flowbite-react/lib/esm/components/Sidebar/SidebarItem';
import { toast } from 'react-hot-toast';

const FlowSideBar = ({ question }) => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [codeInput, setCodeInput] = useState('');
    const handleReset = () => {
        setCode('')
        setOutput('')
        setCodeInput('')
    }
    const handleRun = async () => {
        axios.post('http://localhost:5000/compilecode', {
            code: code,
            input: codeInput,
        }).then((response) => {
            // console.log(response.data)
            setOutput(response.data)
        }
        ).catch((error) => {
            console.log(error)
        }
        )
    }



    const handleSubmit = async () => {
        const str = question?.real_output;
        
        const str1 = output.toString().trimEnd();
        console.log(str)
        console.log(str1)
        if (str == str1) {
            toast.success('Correct Answer', {
                duration: 4000,
            })
        }

    }
    return (
        <>
            <div className=" flex flex-1">
                <Sidebar style={{ backgroundColor: "#ffffff", height: '80vh', color: '#000', textAlign: 'center' }} aria-label="Sidebar with content separator example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <SidebarItem >
                                <span style={{ fontWeight: 'bold' }}>{question?.question_title}</span>

                            </SidebarItem>
                            <div className="min-h-fit h-[40vh] container flex justify-evenly text-sm">
                                {question?.question_description}
                            </div>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <p>Sample TestCase</p>
                            <div className="container flex flex-start text-sm">
                                Input: {question?.sample_input}
                            </div>
                            <div className="container flex flex-start text-sm">
                                Output: {question?.sample_output}
                            </div>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
                <CodeMirror
                    theme={atomone}
                    extensions={[javascript(), cpp()]}
                    value={code}
                    style={{ flex: 1, textAlign: 'left' }}
                    height="80vh"
                    onChange={(e) => { setCode(e) }}
                    options={{
                    }}
                />
                <div className="flex flex-col w-1/4 h-[80vh] bg-[#1f2937]">
                    <textarea className="w-full h-full bg-white text-gray-900" value={codeInput} onChange={(e) => { setCodeInput(e.target.value) }} placeholder='STDIN' />
                    <textarea disabled className="w-full h-full bg-white text-gray-900" value={output} />
                </div>
            </div>
            <div>

                <div className="flex gap-4 justify-end py-4 bg-[#1f2937]">
                    <button onClick={handleRun} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc]">
                        Run

                    </button>
                    <button onClick={handleSubmit} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc] ">
                        Submit

                    </button>
                    <button type="button" onClick={handleReset} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc] ">
                        Reset

                    </button>
                </div>
            </div>

        </>
    )
}

export default FlowSideBar