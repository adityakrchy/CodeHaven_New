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

const FlowSideBar = ({ questions }) => {
    const [code, setCode] = useState('');
    console.log(questions?.question_title)

    const handleReset = () => {
        setCode('')
    }
    return (
        <>
            <div className=" flex flex-1">
                <Sidebar style={{ backgroundColor: "#ffffff", height: '80vh', color: '#000', textAlign: 'center' }} aria-label="Sidebar with content separator example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <SidebarItem >
                                <span style={{fontWeight: 'bold'}}>{questions?.question_title}</span>

                            </SidebarItem>
                            <div className="min-h-fit h-[40vh] container flex justify-evenly text-sm">
                                {questions?.question_description}
                            </div>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <p>Sample TestCase</p>
                            <div className="container flex flex-start text-sm">
                                Input: {questions?.sample_input}
                            </div>
                            <div className="container flex flex-start text-sm">
                                Output: {questions?.sample_output}
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
            </div>

            <div className="flex gap-4 justify-end py-4 bg-[#1f2937]">
                <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc]">
                    Run

                </button>
                <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc] ">
                    Submit

                </button>
                <button type="button" onClick={handleReset} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#8c52ff] rounded-lg hover:bg-[#6c3ccc] ">
                    Reset

                </button>
            </div>

        </>
    )
}

export default FlowSideBar