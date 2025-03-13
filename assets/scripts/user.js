import { bot } from "../../index.js";
import { adminKeyboard } from "../keyboards/keyboard.js";
import { User } from "../models/User.js";

export async function createUser(msg){
   
    const user = await new User().findUser(msg.chat.id)

    if(!user){
        await new User().createUser({
            chatId: msg.chat.id,
            username: msg.from.username,
        })
    }

    if (!user.isAdmin){
        await bot.sendMessage(msg.chat.id, "Привет юзер")
    }

    return await bot.sendMessage(msg.chat.id, "Привет админ вот что ты можешь сделать", adminKeyboard)

}