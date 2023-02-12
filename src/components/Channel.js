import { HashtagIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setChannelInfo } from '../features/channelSlice';

function Channel({id, channelName,currChannel, setCurrChannel, currServer}) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const setChannel= () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }));
        setCurrChannel(id);
        navigate(`/${currServer}/channels/${id}`);
    };

    return (
        <div className={`font-medium flex items-center cursor-pointer hover:bg-discord_channelHoverBg p-1 rounded-md hover:text-white ${id === currChannel ? 'bg-discord_channelHoverBg text-white' : ''}`} onClick={setChannel}>
            <HashtagIcon className='h-5 mr-2' /> {channelName}
        </div>
    )
}

export default Channel;