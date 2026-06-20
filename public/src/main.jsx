import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './App.jsx'
import { MessageContextProvider } from './context/MessageContext.jsx'
createRoot(document.getElementById('root')).render(
    <MessageContextProvider>
    <App />
    </MessageContextProvider>
)   
