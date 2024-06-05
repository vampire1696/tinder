import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./ChatScreen.css"
const ChatScreen = () => {
    const [messages,SetMessages] = useState([{
        name:"Ellen",
        image:"https://scontent.ftxl3-1.fna.fbcdn.net/v/t1.6435-9/159123568_1885026884985165_3759769147753275806_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=e_LF6xnVGQQAX_Uu6Wu&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfDoqqYBgrMvlBXvLWJNalwo3qJZuJr3RLILXk2noFJzJQ&oe=64483B94",
        messages:"whatsup"
    },{
        name:"Ellen",
        image:"https://scontent.ftxl3-1.fna.fbcdn.net/v/t1.6435-9/159123568_1885026884985165_3759769147753275806_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=e_LF6xnVGQQAX_Uu6Wu&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfDoqqYBgrMvlBXvLWJNalwo3qJZuJr3RLILXk2noFJzJQ&oe=64483B94",
        messages:"whatsssd2222up"
    },{
        messages:"Hey Im Hung"
    }])

    const [input,SetInput] = useState('');
    const handleSend = e =>{
        e.preventDefault();
        SetMessages([...messages,{messages:input}]);
        SetInput('');
    }
    return (
    <div className='chatScreen'>
        <p className='chatScreen_timestamp'>You matched with Ellen on Date 10/08/2022</p>
        {messages.map((message) => (
            message.name ? (<div className='chatScreen_message'>
            <Avatar src={message.image} alt={message.name}/>
            <p className='chatScreen_text'>{message.messages}</p>
        </div>) : (
            <div className='chatScreen_message'>
                <p className='chatScreen_textUser'>{message.messages}</p>
            </div>
        
        )
            
        ))}
        <div >
        <form className='chatScreen_input'>
            <input value={input} onChange={(e) => SetInput(e.target.value)}className='chatScreen_inputField' placeholder="Type a message" type="text"/>
            <button onClick={handleSend}className='chatScreen_inputButton'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default ChatScreen