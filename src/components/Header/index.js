import React from 'react';

import  SearchIcon  from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./Header.css";
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png" alt="logo"/>
        <div className="header__input">
          <SearchIcon/>
          <input type="text"></input>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar/>
          <h4>Surya</h4>
        </div>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header;