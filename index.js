import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv'
import { addNumber } from "./assets/scripts/admin.js";
import { createUser } from "./assets/scripts/user.js";

dotenv.config()

export const bot = new TelegramBot(process.env.TOKEN, {polling: true})

bot.on('message', async msg => {
    if (msg.text === '/start'){
        await createUser(msg)
    }
})

bot.on('callback_query', async msg => {
    console.log(msg.data)
    if (msg.data === "addnumber"){
        await addNumber(msg.message.chat.id)
    }
})

bot.on('polling_error', console.log)