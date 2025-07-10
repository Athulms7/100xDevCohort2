import { setMinutes } from "date-fns";
import WebSocket,{WebSocketServer} from "ws";
const wss= new WebSocketServer({port:8080});



wss.on("connection",function(socket){

    setInterval(() => {
       socket.send("current price of solana:"+Math.random()) 
    },2000);
    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong...");
        }
      
    })
    
})


// import express from "express";
// const app=express();

// app.listen(3000);