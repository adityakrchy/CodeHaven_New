import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
// import ACTIONS from './src/Actions';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};
function getAllConnectedClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId || [])).map((socketId)=>{
        return {
            socketId, username: userSocketMap[socketId]
        }
    })
}

io.on('connection', (socket)=>{
    console.log('socket connected', socket.id);
    socket.on('join', (roomId, username)=>{
        // console.log("data received", data);
        // console.log("username received", username);
        userSocketMap[socket.id] = username;
        socket.join(roomId)
        const clients = getAllConnectedClients(roomId);
        // console.log("clients", clients);
        clients.forEach(({socketId})=>{
            io.to(socketId).emit('joined', {clients, username, socketId: Socket.id})
        })
        
    })

    socket.on('code-change', ({roomId, value})=>{
        console.log("code change", value);
        io.to(roomId).emit('code-change', {value});
    })

    socket.on('disconnecting', ()=>{
        const rooms = [...socket.rooms];
        rooms.forEach((roomId)=>{
            socket.in(roomId).emit('disconnected', {
                socketId: socket.id,
                username: userSocketMap[socket.id]
            });
        })
        delete userSocketMap[socket.id];
        socket.leave();
    })

})

server.listen(5001, () => {
    console.log('listening on *:5001');
});