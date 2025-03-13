import { bot } from "../../index.js";
import { adminKeyboard } from "../keyboards/keyboard.js";
import { User } from "../models/User.js";

export async function createUser(msg){
    await bot.sendMessage(msg.chat.id, "Привет")

    const data = {
        chatId: msg.chat.id,
        username: msg.from.username
    }

    return await new User().createUser(data)
}


export async function checkAdmin(chatId){
    const isAdmin = await new User().checkAdmin(chatId)

    if (!isAdmin){
        return await bot.sendMessage(chatId, `Привет ${isAdmin.username}`)
    }

    return await bot.sendMessage(chatId, "Привет админ вот что ты можешь сделать", adminKeyboard)
}
