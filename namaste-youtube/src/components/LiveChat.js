import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helpers';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.chat.messages);

    const [livemessage, setLivemessage] = useState("")

    useEffect(()=>{
       const time= setInterval(()=>{
        dispatch(addMessage({
            name : generateRandomName(),
            message :makeRandomMessage(20)
        }))
        },2000)

        return ()=> clearInterval(time);
    },[])

  return (
    <div>
        <div className='rounded-lg p-2 ml-2 border border-black w-full h-[600px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessage.map((c,i)=>(
                <ChatMessage key={i} name={c.name} message={c.message}/>
            ))
        }
        </div>
        <form className='w-full border border-black p-2 ml-2' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(
                addMessage({
                    name : "Soorya",
                    message: livemessage
                })
            );
            setLivemessage("");
        }}>
            <input className='w-96  border-black' type="text" value={livemessage} onChange={(e)=>setLivemessage(e.target.value)}/>
            <button className='px-2 mx-2 bg-green-200'>send</button>
        </form>
    </div>
    
  )
}

export default LiveChat