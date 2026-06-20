import Message from '../models/Message.js'
import mongoose from 'mongoose'

export const createMassage = async (req,res)=>{
    const {text, author} = req.body
    try{
        const message = await Message.create({text, author})
        res.status(200).json(message) 
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const getMassages = async (req,res)=>{ // все записи
    try{
        const messages = await Message.find().sort({createdAt: -1}) //сортировка и вывод
        res.status(200).json(messages) 
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const getMassage = async (req,res)=>{ //поиск записи по динамическому id 
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){ //если айди не коректный 
        return res.status(404).json({error: 'No such message'})
    } 

    try{
        const message = await Message.findById(id)
        if(!message){
            return res.status(404).json({error: 'No such message'})
        }
        res.status(200).json(message) 
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteMassage = async (req,res)=>{ //поиск записи по динамическому id 
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){ //если айди не коректный 
        return res.status(404).json({error: 'No such message'})
    } 

    try{
        const message = await Message.findByIdAndDelete(id)
        if(!message){
            return res.status(404).json({error: 'No such message'})
        }
        res.status(200).json(message) 
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const updateMassage = async (req,res)=>{ //поиск записи по динамическому id 
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){ //если айди не коректный 
        return res.status(404).json({error: 'No such message'})
    } 

    try{
        const message = await Message.findByIdAndUpdate(
            id,
            { ...req.body },
            {new: true, runValidators: true }
        )
        if(!message){
            return res.status(404).json({error: 'No such message'})
        }
        res.status(200).json(message) 
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}