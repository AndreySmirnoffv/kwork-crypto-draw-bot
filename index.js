import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv'
import { addNumber } from "./assets/scripts/admin.js";

dotenv.config()

export const bot = new TelegramBot(process.env.TOKEN, {polling: true})

bot.on('message', async msg => {
    if (msg.text === '/start'){
        await bot.sendMessage(msg.chat.id, `Привет ${msg.from.username}`)
    }
})

bot.on('callback_query', async msg => {
    if(msg.data === "addnumber"){
        await addNumber(msg.message.chat.id)
    }
})

bot.on('polling_error', console.log)