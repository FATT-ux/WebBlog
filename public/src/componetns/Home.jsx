import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import MessageForm from './MessageForm'
import { MessageContext } from '../context/MessageContext'

export default function Home() {
    const {messages, setMessages} = useContext(MessageContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        const getData = async () => {
            try{
                const res = await axios.get('/api/message')
                setMessages(res.data);
            } catch(err){
                console.warn(err);
            } finally{
                setIsLoading(false)
            }
        }
        getData();
    },[setMessages])

  return (
    <div className='main-section'>
         <MessageForm/>
        {isLoading ? (<p>Загрузка базы данных</p>) : (
            <div className='messages'>
            {messages.map(el => <Post key={el._id} {...el} />)}
            </div>
        )}
    </div>
  )
}
