import { createContext, useState } from 'react' 

// это все нужно чтобы можно было все сразу удалять добавлять и сразу все выводилось на экран

export const MessageContext = createContext() //создаем контейнер для данных

export const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([])

    return(
        <MessageContext.Provider value={{ messages, setMessages }}>
            { children }
        </MessageContext.Provider>
    )
}

//это все надо добавить в main js и туда где мы все изменяем в form и в hone
// это некий шаблон который можно использовать