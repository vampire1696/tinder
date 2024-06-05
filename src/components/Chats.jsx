import React from 'react'
import Chat from './Chat'
import "./Chats.css"
const Chats = () => {
  return (
    <div className='chats'>

        <Chat name="mark" message="yo whatsup" timestamp="40 seconds ago" profilePic="https://scontent.ftxl3-2.fna.fbcdn.net/v/t1.6435-9/74529548_2785090951509606_4344335338022371328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2ckXM4inRMoAX-4342X&_nc_ht=scontent.ftxl3-2.fna&oh=00_AfBTk991whz8zYuy1AaUJXJMEIRELgqUmML-s6fZoGoBPg&oe=64483186"/>
        
        <Chat name="ellen" message="yo whatsssssup" timestamp="40 seconds ago" profilePic=""/>
        
        <Chat name="sandra" message="yo what333sup" timestamp="40 seconds ago" profilePic=""/>
        
        <Chat name="natasha" message="y222o whatsup" timestamp="40 seconds ago" profilePic=""/>
    </div>
  )
}

export default Chats