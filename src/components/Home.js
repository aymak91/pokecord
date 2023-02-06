import { ChevronDownIcon, CogIcon, MicrophoneIcon, PhoneIcon, PlusIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import { auth, db } from '../firebase';
import Channel from './Channel';
import ServerIcon from './ServerIcon';
import {useCollection} from "react-firebase-hooks/firestore"
import Chat from './Chat';

function Home() {
  
    const [user] = useAuthState(auth);
    const [channels] = useCollection(db.collection("channels"))
    const [currChannel, setCurrChannel] = useState(null);
    const [currServer, setCurrServer] = useState(null);

    const handleAddChannel = async () => {
        const channelName = prompt("Enter a new channel name:")?.trim();
        const sameChannels = await db.collection("channels").where("channelName", "==", channelName).get()
        
        if (!sameChannels.empty) {
            alert('Channel name already exists')
        } else if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            })
        }
    }

    const channelList = channels?.docs.map((doc) => (
        {
            channelId: doc.id,
            channelName: doc.data().channelName,
        }
    )).sort((a,b) => a.channelName.toUpperCase() > b.channelName.toUpperCase() ? 1 : a.channelName.toUpperCase() < b.channelName.toUpperCase() ? -1 : 0);

    return (
        <>
            {!user && <Navigate to="/" />}
            <div className='flex h-screen'>
                <div className='flex flex-col space-y-3 bg-discord_serversBg p-3 min-w-max overflow-y-scroll scrollbar-hide'>
                    <div>
                        <div className='server-default hover:bg-discord_purple' onClick={() => setCurrServer(null)}>
                            <img src="https://cdn-icons-png.flaticon.com/512/287/287221.png" alt="" className='h-5'/>
                        </div>
                    </div>

                    <hr className='border-gray-700 border w-8 mx-auto'></hr>
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Bug" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Bug_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Dark" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Dark_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Dragon" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Dragon_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Electric" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Electric_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Fairy" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Fairy_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Fighting" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Fighting_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Fire" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Fire_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Flying" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Flying_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Ghost" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Ghost_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Grass" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Grass_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Ground" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Ground_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Ice" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Ice_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Normal" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Normal_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Poison" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Poison_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Psychic" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Psychic_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Rock" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Rock_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Steel" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Steel_icon_SV.png" />
                    <ServerIcon currServer={currServer} setCurrServer={setCurrServer} type="Water" image="https://raw.githubusercontent.com/aymak91/pokecord/main/public/assets/types/Water_icon_SV.png" />
                    <div>
                        <div className='server-default hover:bg-discord_green group min-w-full' >
                            <PlusIcon className="text-discord_green group-hover:text-white h-7"/>
                        </div>
                    </div>
                </div>
                <div className='bg-discord_channelsBg flex flex-col min-w-max'>
                    <h2 className='flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-discord_serverNameHoverBg w-72'>
                        Pokemon League {currServer} Server <ChevronDownIcon className='h-5 ml-2' />
                    </h2>
                    <div className='text-discord_channelText flex-grow overflow-y-scroll scrollbar-hide'>
                        {currServer === null ? 
                            (
                            <div className='flex items-center p-2 mb-2 font-semibold'>
                                Please select a sever to start!
                            </div>
                            ) : (<>
                                <div className='flex items-center p-2 mb-2'>
                                    <ChevronDownIcon className='h-3 mr-2'/>
                                    <h4 className='font-semibold'>Channels</h4>
                                    <PlusIcon className='h-6 ml-auto cursor-pointer hover:text-white' onClick={handleAddChannel}/>
                                </div>
                                <div className='flex flex-col space-y-2 px-2 mb-4'>
                                    {channelList?.map((doc) => (
                                        <Channel key={doc.channelId} id={doc.channelId} channelName={doc.channelName} currChannel={currChannel} setCurrChannel={setCurrChannel}/>
                                    ))}
                                </div>
                            </>
                            )
                        }
                    </div>
                    <div className='bg-discord_userSectionBg p-2 flex justify-between items-center space-x-8'>
                        <div className='flex items-center space-x-1'>
                            <img src={user?.photoURL} alt="" className='h-10 round-full' />
                            <h4 className='text-white text-xs font-medium'>
                                {user?.displayName}
                                <span className='text-discord_userSectionText block'>
                                    #{user?.uid.substring(0,4).toUpperCase()}
                                </span>
                            </h4>
                        </div>
                        <div className='text-gray-400 flex items-center'>
                            <div className='icon-container'>
                                <MicrophoneIcon className='h-5 icon'/>
                            </div>
                            <div className='icon-container'>
                                <PhoneIcon className='h-5 icon'/>
                            </div>
                            <div className='icon-container'>
                                <CogIcon className='h-5 icon' onClick={() => auth.signOut()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-discord_chatBg flex-grow'>
                    <Chat />
                </div>
            </div>        
        </>
    )
}

export default Home
