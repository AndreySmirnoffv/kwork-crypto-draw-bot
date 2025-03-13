import { bot } from "../../index.js";
import { waitForText } from "../utils/waitForText.js";
import { Admin } from "../models/Admin.js";

export async function addNumber(chatId){
    try {
        await bot.sendMessage(chatId, "Загадайте число")
        const number = Number(await waitForText(chatId))

        await new Admin().addNumber(number)
        return await bot.sendMessage(chatId, "Ваше число сохранено в базу данных")
    } catch (error) {
        console.error(error)
    }
}