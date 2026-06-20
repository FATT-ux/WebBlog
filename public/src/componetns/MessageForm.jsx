import React, { useState, useContext } from 'react'
import axios from 'axios'
import { MessageContext } from '../context/MessageContext'

export default function MessageForm() {
    const {setMessages} = useContext(MessageContext)
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const message = { text, author } //получаем что написали в форме

        try {
            const response = await axios.post('/api/message', message, { // указываем что вставляем в базу данных
                headers: {
                    'Content-Type': 'application/json' //данные в виде json
                }
            })

                setError(null)
                setText('')
                setAuthor('')
                console.log('Добавлено:', response.data)
                setMessages((prevMessages) => [response.data, ...prevMessages])

        } catch(err) {
            console.error('Ошибка:', err.response?.data || err.message)
            setError(err.response?.data?.error || 'Ошибка отправки')
        }
    }

  return (
    <form className='add-message' onSubmit={handleSubmit}>
        <h3>Add message form</h3>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Введите сообщение'></textarea>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Введите автора' />
        {error && <div className='error'>{error}</div>}
        <button>Добавить</button>
    </form>
  )
}
