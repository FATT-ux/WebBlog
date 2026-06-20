import mongoose from 'mongoose'

const {Schema} = mongoose

const messageSchema = new Schema({ //создаем таблицу и какие там будут поля
    text:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
}, {timestamps:true}) //временная отметка когда было создано сообщение

export default mongoose.model('Message', messageSchema)