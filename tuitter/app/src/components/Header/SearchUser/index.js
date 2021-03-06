import React, { useState, useEffect } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import ResultSearch from './ResultSearch';

import { searchUser } from '../../../services/api'

import './index.scss'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 350,
      },
    },
  },
}));

const SearchUser = () => {

    const classes = useStyles();

    const [typingTimer, setTypingTimer ] = useState(null);
    const [termSearch, setTermSearch ] = useState('');
    const [usersReceived, setUsersReceived ] = useState([]);
    const [hasFocus, setHasFocus ] = useState(false)
    const [searchValue, setSearchValue ] = useState('')
    const [statusCode, setStatusCode ] = useState(false)

    const timer = 1000;

    const handleBlur = () => {
      window.addEventListener('click', function(e){
        if(e.target.className === 'bodyWrapper'){
          setHasFocus(false)
          setSearchValue('');
          setUsersReceived([]);

        }
      })
    }

    const handleFocus = () => {
      setHasFocus(true)
    }

    const handleChange = (e) => {
      const value = e.target.value;
      setSearchValue(value);
    }

    const handleKeyDown = (e) => {
      setTypingTimer(clearTimeout(typingTimer));
      setUsersReceived([]);
    }

    const handleKeyUp = (e) => {
      const value = e.target.value;
      console.log(value)
      clearTimeout(typingTimer);
      setTypingTimer(setTimeout(() => {
        setTermSearch(value);
      }, timer));
    }

    const requestUsers = async (termSearch) => {
      const users = await searchUser(termSearch);
      setStatusCode(users.status)
      setUsersReceived(users.data)
    }

    const handleUpdate = () => {
      requestUsers(termSearch);
    }

    useEffect(() => {
      if(termSearch !== '' && hasFocus){
        requestUsers(termSearch);
      }
    },[termSearch, hasFocus]);

    return (
      <div className="wrapperSearch">
        <div className={classes.search}>

            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Buscar usuario"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                value={searchValue}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                inputProps={{ 'aria-label': 'search' }}
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
        
        <ResultSearch hasFocus={hasFocus} emitUpdate={handleUpdate} searchValue={searchValue} users={usersReceived} statusCode={statusCode}/>

      </div>
    )
}

export default SearchUser;