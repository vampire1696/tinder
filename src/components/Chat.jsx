import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Chat.css"

const Chat = ({name,profilePic,timestamp,message}) => {
  return (
    <Link to={`/chat/${name}`}>
    <div className='chat'>
        <Avatar className="avatar" alt={name} src={profilePic}/>
        <div className='chat_details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat_timestamp'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat