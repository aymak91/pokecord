import React from 'react'

function ServerIcon({image, currServer, setCurrServer, type}) {
  return (
    <>
      {currServer !== type ?
        (<img src={image} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' onClick={() => setCurrServer(type)}/>)
        :
        (<img src={image} alt="" className='h-12 cursor-pointer rounded-2xl outline outline-white'/>)
      }
    </>
  )
}

export default ServerIcon
