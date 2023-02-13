import { BellIcon, ChatIcon, EmojiHappyIcon, HashtagIcon, InboxIcon, QuestionMarkCircleIcon, SearchIcon, UsersIcon, GiftIcon, PlusCircleIcon } from '@heroicons/react/solid';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect, useRef, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import {auth, db} from '../firebase';
import firebase from 'firebase/compat/app';
import { useCollection } from "react-firebase-hooks/firestore";
import Message from './Message'; 
import { setChannelInfo } from '../features/channelSlice';


function Chat({currServer}) {
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [user] = useAuthState(auth);
    const inputRef = useRef("");
    const chatRef = useRef(null);
    const [channelEdit, setChannelEdit] = useState(false);
    const [channelInput, setChannelInput] = useState(channelName);
    const dispatch = useDispatch();

    const [messages] = useCollection(
        channelId && 
        db
            .collection("servers")
            .doc(currServer)
            .collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );
        
    
    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputRef.current.value !== "") {
            db.collection("servers").doc(currServer).collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email,
            })
        }

        inputRef.current.value = "";
    }
    const handleCloseEdit = (e) => {
        if (e.keyCode === 27) {
          setChannelEdit(false);
          setChannelInput(channelName);
        }
    };

    const handleEditChannel = (e) => {
        e.preventDefault();
        db.collection("servers").doc(currServer).collection("channels").doc(channelId).update({channelName: channelInput});
        dispatch(setChannelInfo({
            channelId: channelId,
            channelName: channelInput
        }))
        setChannelEdit(false);
    }

    useEffect(() => {
        setChannelInput(channelName)
    }, [channelName])
    
    useEffect(scrollToBottom)

    return (
        <div className='flex flex-col h-screen'>
            <header className='flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1'>
                <div className='flex items-center space-x-1'>
                    {
                        channelEdit ? (
                            <form>
                                <input 
                                    type="text"
                                    value={channelInput}
                                    onChange={e => setChannelInput(e.target.value)}
                                    onKeyDown={handleCloseEdit}
                                    autoFocus
                                    autoComplete="off"
                                    className='p-2.5 bg-discord_chatInputBg mr-0 rounded-lg text-discord_message focus:outline-none w-9/12'
                                />
                                <button hidden type="submit" onClick={handleEditChannel} />
                            </form>
                        ) :
                        <>
                            <HashtagIcon className='h-6 text-discord_chatHeader'/>
                            <h4 className='text-white font-semibold' onClick={() => setChannelEdit(true)}>{channelName}</h4>
                        </>
                    }
                </div>
                <div className='flex space-x-3'>
                    {/* <BellIcon className="icon"/>
                    <ChatIcon className="icon"/>
                    <UsersIcon className="icon"/> */}
                    <a href="https://alexandermak.dev/" target="_blank"><i className='fas fa-user-circle fa-lg pb-2 px-2 icon'></i></a>
                    <a href="https://www.linkedin.com/in/alexanderyumak/" target="_blank"><i className="fab fa-linkedin-in fa-lg pb-2 px-2 icon"></i></a>
                    <a href="https://github.com/aymak91" target="_blank"><i className="fab fa-github fa-lg pb-2 px-2 icon"></i></a>
                    <div className='flex bg-discord_chatHeaderInputBg text-xs pl-1 rounded-md'>
                        <input type="text" placeholder='Search' className='bg-transparent focus:outline-none text-white p-1 placeholder-discord_chatHeader' />
                        <SearchIcon className='h-4 text-discord_chatHeader mr-1 mt-1'/>
                    </div>
                    <InboxIcon className='icon' />
                    <QuestionMarkCircleIcon  className='icon'/>
                </div>
            </header>
            <main className='flex-grow overflow-y-scroll scrollbar-hide'>
                {messages?.docs.map((doc) => {
                    const {message, timestamp, name, photoURL, email} = doc.data();
                    return (
                        <Message 
                            key={doc.id} 
                            id={doc.id} 
                            message={message}
                            timestamp={timestamp}
                            name={name}
                            photoURL={photoURL}
                            email={email}
                            currServer={currServer}
                        />
                    );
                })}
                <div ref={chatRef} className="pb-16" />
            </main>
            <div className='flex items-center p-2.5 bg-discord_chatInputBg mx-5 mb-7 rounded-lg'>
                <PlusCircleIcon className='icon mr-4'/>
                <form className='flex-grow'>
                    <input type="text" disabled={!channelId} placeholder={channelId ? `Message #${channelName}` : "Select a channel"} className="bg-transparent focus:outline-none text-discord_chatInputText w-full placeholder-discord_chatInput text-sm" ref={inputRef}/>
                    <button hidden type="submit" onClick={sendMessage} />
                </form>
                <GiftIcon className='icon mr-2'/>
                <EmojiHappyIcon className='icon'/>
            </div>
        </div>
    )
}

export default Chat
