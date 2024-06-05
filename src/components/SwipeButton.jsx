import React from 'react'
import "./SwipeButton.css"
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const SwipeButton = () => {
  return (
    <div className='swipeButtons'>
        
        <IconButton>
        <CloseIcon className="button_close"fontSize='large'/>
        </IconButton>
       
        <IconButton>
        <FavoriteIcon className="button_favorite" fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButton