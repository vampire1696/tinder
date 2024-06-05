import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'
import { Avatar, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useAuth from '../useAuth';
const Header = ({backButton}) => {
  const navigate = useNavigate();
  const {user} = useAuth();
  return (
    <div className='header'>
         {backButton ? (
          <IconButton onClick={()=>navigate(backButton,{replace:true})}>
          <ArrowBackIosIcon fontSize='large'/>
          </IconButton>
        ) : (
          <IconButton>
        {/* <PersonIcon className="header_icon" fontSize='large'/> */}
        <Avatar src={user.photoURL} alt={user.displayName}/>
        </IconButton>
        )} 
        
        <Link to="/">
        <img className="header_logo" src="https://cdn-icons-png.flaticon.com/512/4423/4423669.png" alt='tinder logo'/>
        </Link>
        <Link to="/chat">
        <IconButton>
        <ForumIcon className="header_icon" fontSize='large'/>
        </IconButton>
        </Link> 
        
    </div>
  )
}

export default Header