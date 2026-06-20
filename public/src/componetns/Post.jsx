import { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'
import axios from 'axios'

export default function Post(props) {
  const {setMessages} = useContext(MessageContext)

  const handleClick = async () =>{
    try{
      const response = await axios.delete(`/api/message/${props._id}`)

      setMessages((prevMessage) => 
      prevMessage.filter((el) => el._id !== props._id)
      )

    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='message'>
        <span onClick={handleClick} className='del'>X</span>
        <h4>{props.author}</h4>
        <p>{props.text}</p>
        <hr/>
        <p>{props.createdAt}</p>
    </div>
  )
}
