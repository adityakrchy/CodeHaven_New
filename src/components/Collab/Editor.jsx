import React, { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror'
import { useParams } from 'react-router-dom';
import { atomone } from '@uiw/codemirror-theme-atomone'
import { initSocket } from '../../socket';




const Editor = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();
        }

        init();

    }, [])
    const [temp, setTemp] = useState(null)
    const editorRef = useRef(null);
    const socketRef = useRef(null);
    const { roomId } = useParams();
    const handleChange = (editor, data, value) => {
        setValue(editor);
        console.log("sending", editor)
        socketRef.current.emit('code-change', {
            roomId,
            editor
        })
    };


    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on('code-change', ({ value }) => {
                setTemp(value);
                console.log("receiving", temp)
                // if (value !== null) {
                //     editorRef.current.editor.setValue(value);
                // }
            })
        }
    }, [socketRef.current])

    return <CodeMirror
        ref={editorRef}
        value={value}
        theme={atomone}
        height='100vh'
        onChange={handleChange}
    // className="w-full h-[100vh]"
    />
    // return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;