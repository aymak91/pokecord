import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setServerInfo } from '../features/serverSlice';


function ServerIcon({image, currServer, setCurrServer, type}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setServer = () => {
    dispatch(setServerInfo({
      serverId: type,
    }));

    setCurrServer(type);
    navigate(`/${type}`)
  }


  return (
    <>
      {currServer !== type ?
        (<img src={image} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' onClick={setServer}/>)
        :
        (<img src={image} alt="" className='h-12 cursor-pointer rounded-2xl outline outline-white'/>)
      }
    </>
  )
}

export default ServerIcon
