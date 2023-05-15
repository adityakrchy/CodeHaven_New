import React, { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror'
import {atomone} from '@uiw/codemirror-theme-atomone'
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';


const Editor = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);
    const [code, setCode] = useState('');
    // useEffect(() => {
    //     async function init() {
    //         // editorRef.current = Codemirror.fromTextArea(
    //         //     document.getElementById('realtimeEditor'),
    //         //     {
    //         //         mode: { name: 'javascript', json: true },
    //         //         theme: 'dracula',
    //         //         autoCloseTags: true,
    //         //         autoCloseBrackets: true,
    //         //         lineNumbers: true,
    //         //     }
    //         // );

    //         editorRef.current = ref;

    //         editorRef.current.on('change', (instance, changes) => {
    //             const { origin } = changes;
    //             const code = instance.getValue();
    //             onCodeChange(code);
    //             if (origin !== 'setValue') {
    //                 socketRef.current.emit(ACTIONS.CODE_CHANGE, {
    //                     roomId,
    //                     code,
    //                 });
    //             }
    //         });
    //     }
    //     init();
    // }, []);

    // useEffect(() => {
    //     if (socketRef.current) {
    //         socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
    //             if (code !== null) {
    //                 editorRef.current.setValue(code);
    //             }
    //         });
    //     }

    //     return () => {
    //         socketRef.current.off(ACTIONS.CODE_CHANGE);
    //     };
    // }, [socketRef.current]);

    // useEffect(() => {
    //     if (socketRef.current) {
    //         socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
    //             if (code !== null) {
    //                 editorRef.current.setValue(code);
    //             }
    //         });
    //     }

    //     return () => {
    //         socketRef.current.off(ACTIONS.CODE_CHANGE);
    //     };
    // }, [socketRef.current]);

    return <CodeMirror
        theme={atomone}
        extensions={[javascript(), cpp()]}
        value={code}
        style={{ flex: 1, textAlign: 'left' }}
        height="100vh"
        onChange={(e) => { setCode(e) }}
        ref={editorRef}
    />
};

export default Editor;


