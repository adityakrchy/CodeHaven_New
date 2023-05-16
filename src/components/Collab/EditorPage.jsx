import React, { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Editor from './Editor';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Action, { } from '../../Actions';
import { io } from 'socket.io-client';
import { initSocket } from '../../socket';
import ClientAvatar from './ClientAvatar';
const EditorPage = () => {
    const reactNavigator = useNavigate();
    const [clients, setClients] = useState([]);
    const socketRef = useRef(null);
    const locationn = useLocation();
    const roomId = useParams().roomId;
    const username = locationn.state?.username;
    useEffect(() => {
        const init = async () => {
            // console.log(roomId)
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error', (err) => handleErrors(err));
            socketRef.current.on('connect_failed', (err) => handleErrors(err));
            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Socket connection failed, try again later.');
                reactNavigator('/dashboard');
            }
            socketRef.current.emit('join', roomId, username);
            socketRef.current.on('joined', ({ clients, username, socketId }) => {
                if (username !== locationn.state?.username) {
                    toast.success(`${username} joined the room`);
                    console.log(`${username} joined`);
                }
                setClients(clients);
            })

            // listening for disconnected
            socketRef.current.on('disconnected', ({ socketId, username }) => {
                toast.success(`${username} left the room`);
                setClients((prev) => {
                    return prev.filter(client => client.socketId !== socketId);
                })

            })


        }
        init();
        return () => {
            socketRef.current.off('joined');
            socketRef.current.off('disconnected');
            socketRef.current.disconnect();
        }
    }, [])
    // useEffect(() => {
    //     const init = async () => {
    //        socketRef.current = await initSocket();
    //         // socketRef.current.on('connect_error', (err) => handleErrors(err));
    //         // socketRef.current.on('connect_failed', (err) => handleErrors(err));
    //         // function handleErrors(e) {
    //         //     console.log('socket error', e);
    //         //     toast.error('Socket connection failed, try again later.');
    //         //     reactNavigator('/');
    //         // }

    //         socketRef.current.emit(Action.JOIN, {
    //             roomId,
    //             username: location.state?.username,
    //         });

    //         // Listening for joined event
    //         socketRef.current.on(
    //             Action.JOINED,
    //             ({ clients, username, socketId }) => {
    //                 if (username !== location.state?.username) {
    //                     toast.success(`${username} joined the room.`);
    //                     console.log(`${username} joined`);
    //                 }
    //                 setClients(clients);
    //                 socketRef.current.emit(Action.SYNC_CODE, {
    //                     code: codeRef.current,
    //                     socketId,
    //                 });
    //             }
    //         );

    //         // Listening for disconnected
    //         socketRef.current.on(
    //             Action.DISCONNECTED,
    //             ({ socketId, username }) => {
    //                 toast.success(`${username} left the room.`);
    //                 setClients((prev) => {
    //                     return prev.filter(
    //                         (client) => client.socketId !== socketId
    //                     );
    //                 });
    //             }
    //         );
    //     };
    //     init();
    //     return () => {
    //         // socketRef.current.disconnect();
    //         // socketRef.current.off(Action.JOINED);
    //         // socketRef.current.off(Action.DISCONNECTED);
    //     };
    // }, [])
    async function copyRoomId() {
        try {
            await navigator.clipboard.writeText(roomId);
            toast.success('Room ID has been copied to your clipboard');
        } catch (err) {
            toast.error('Could not copy the Room ID');
            console.error(err);
        }
    }
    function leaveRoom() {
        reactNavigator('/colabtogether');
    }
    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            src="/logo_bg_removed.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <ClientAvatar
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <button className="btn copyBtn" onClick={copyRoomId}>
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn" onClick={leaveRoom}>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <Editor
                    socketRef={socketRef}
                    roomId={roomId}
                    onCodeChange={(code) => {
                        codeRef.current = code;
                    }}
                />
            </div>
        </div>
    )
}

export default EditorPage