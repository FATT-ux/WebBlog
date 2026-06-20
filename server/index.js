import express from 'express'
import 'dotenv/config'
import messageRouter from './routes/messages.js'
import mongoose from 'mongoose'
const app = express()

app.use(express.json()) //для обработки json
app.use('/api/message', messageRouter)
// это чтобы была ссылка через /api/ например если будет ссылка about то будет /api/about


const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server run on port ${PORT}`)
})
}).catch((error) => {
    console.log('DB connect error', error.message)
})


