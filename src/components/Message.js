import React, { useState } from 'react';
import moment from 'moment';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from '../firebase';
import {useSelector} from 'react-redux';
import { selectChannelId } from '../features/channelSlice';

function Message({id, message, timestamp, name, email, photoURL, currServer}) {
    const channelId = useSelector(selectChannelId);
    const [user] = useAuthState(auth);
    const [msgEdit, setMsgEdit] = useState(false);
    const [msgInput, setMsgInput] = useState(message);

    const handleEditMessage = (e) => {
        e.preventDefault();

        if (msgInput === "") return;
        const messageData = {
            timestamp,
            message: msgInput,
            name,
            photoURL,
            email,
        }

        db.collection("servers").doc(currServer).collection("channels").doc(channelId).collection("messages").doc(id).update(messageData);
        setMsgEdit(false);
    }

    const handleCloseEdit = (e) => {
        if (e.keyCode === 27) {
          setMsgEdit(false);
          setMsgInput(message);
        }
    };

    return (
    <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group'>
        <img src={photoURL} alt="" className='h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl' />
        <div className='flex flex-col w-full'>
            <h4 className='flex items-center space-x-2 font-medium'>
                <span className='hover:underline text-white text-sm cursor-pointer'> {name}</span>
                <span className='text-discord_messageTimestamp text-xs'>{moment(timestamp?.toDate().getTime()).format("lll")}</span>
            </h4>
        {msgEdit ? (
            <>
                <form className='flex-grow' onSubmit={handleEditMessage}>
                    <input
                        type="text"
                        value={msgInput}
                        onChange={e => setMsgInput(e.target.value)}
                        onKeyDown={handleCloseEdit}
                        autoFocus
                        autoComplete="off"
                        className='p-2.5 bg-discord_chatInputBg mr-0 rounded-lg text-discord_message focus:outline-none w-9/12' />
                    <button hidden type="submit" onClick={handleEditMessage} />
                </form>
                <p className='text-discord_message text-sm'>
                    escape to {' '}
                    <span className='text-discord_link link' onClick={() =>handleCloseEdit({keyCode: 27})}>cancel</span>
                    {' '} • enter to {' '}
                    <span className='text-discord_link link' onClick={handleEditMessage}>save</span>

                </p>
            </>
            ) : 
            <p className='text-sm text-discord_message'>{message}</p>
        }
            
        </div>
         {   (
                user?.email === email && !msgEdit ? 
                (<div className='flex flex-row ml-auto'>
                    <div className='hover:bg-discord_purple p-1 rounded-sm text-discord_userSectionText hover:text-white cursor-pointer' onClick={() => setMsgEdit(true)}>
                        <PencilIcon className='h-5 opacity-0 group-hover:opacity-100'/>
                    </div>
                    <div className='hover:bg-discord_red p-1 rounded-sm text-discord_red hover:text-white cursor-pointer' onClick={() => db.collection("servers").doc(currServer).collection("channels").doc(channelId).collection("messages").doc(id).delete()}>
                        <TrashIcon className='h-5 opacity-0 group-hover:opacity-100'/>
                    </div>
                </div>)
                :
                (<div />)
            )
        }

    </div>
    )
}

export default Message